import cdk = require('@aws-cdk/core');
import { DomainName, EndpointType, LambdaIntegration, RestApi, MockIntegration, PassthroughBehavior, IResource, Cors } from '@aws-cdk/aws-apigateway';
import { Certificate, DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { ARecord, HostedZone, IHostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { ApiGatewayDomain } from '@aws-cdk/aws-route53-targets';
import { Construct } from '@aws-cdk/core';
import { join } from 'path';

export interface ApiStackProps extends cdk.StackProps {
  DARK_SKY_API_KEY: string;
  hostedZone: string;
  domainName: string;
  certArn?: string;
  corsUrl: string;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    // lambda function
    const weatherApiFunction = new Function(this, 'weatherApiFunction', {
      runtime: Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: Code.asset(join(__dirname, '..')),
      environment: {
        DARK_SKY_API_KEY: props.DARK_SKY_API_KEY,
        CORS_DOMAIN: props.corsUrl
      },
    });

    // Output the function name, which is needed when invoking the function
    // using `sam local invoke "function_logical_id_from_generated_cf_template"`.
    // Hoping for better integration between CDK and SAM soon:
    // https://github.com/aws/aws-cdk/issues/716
    const ignored = new cdk.CfnOutput(this, "weatherApiFunctionOutput", { value: weatherApiFunction.functionName});

    const hostedZone = HostedZone.fromLookup(this, 'HostedZone', {
      domainName: props.hostedZone
    });
    const cert = props.certArn ? 
      Certificate.fromCertificateArn(this, 'API Certificate', props.certArn) :
      ApiStack.createCert(this, props, hostedZone);

    // api gateway
    const api = new RestApi(this, 'weather-api', {
      deployOptions: {
        stageName: 'dev'
      }
    });
    const weatherResource = api.root.addResource("weather");
    const getMethod = weatherResource.addMethod(
      'GET',
      new LambdaIntegration(weatherApiFunction)
    );
    
    // custom domain name for API
    const domainName = new DomainName(this, 'CustomDomain', {
      certificate: cert,
      domainName: props.domainName,
      endpointType: EndpointType.REGIONAL
    });
    domainName.addBasePathMapping(api, {basePath: 'v1'});

    // add custom domain name to Route 53
    const aRecord = new ARecord(this, 'AliasRecord', {
      recordName: props.domainName,
      zone: hostedZone,
      target: RecordTarget.fromAlias(new ApiGatewayDomain(domainName))
    });
  }
  
  static createCert(scope: Construct, props: ApiStackProps, hostedZone: IHostedZone) {
    return new DnsValidatedCertificate(scope, 'API Certificate', {
      hostedZone,
      domainName: props.domainName,
      region: 'ap-southeast-2'
    });
  }
}
