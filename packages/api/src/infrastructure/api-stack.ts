import cdk = require('@aws-cdk/core');
import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { Certificate, DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { HostedZone } from '@aws-cdk/aws-route53';
import { Construct } from '@aws-cdk/core';
import { join } from 'path';

export interface ApiStackProps extends cdk.StackProps {
  DARK_SKY_API_KEY: string;
  hostedZone: string;
  domainName: string;
  certArn?: string;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    // lambda function
    const weatherApiFunction = new Function(this, 'weatherApiFunction', {
      runtime: Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: Code.asset(join(__dirname, '..')),
      environment: {DARK_SKY_API_KEY: props.DARK_SKY_API_KEY},
    });

    // Output the function name, which is needed when invoking the function
    // using `sam local invoke "function_logical_id_from_generated_cf_template"`.
    // Hoping for better integration between CDK and SAM soon:
    // https://github.com/aws/aws-cdk/issues/716
    const ignored = new cdk.CfnOutput(this, "weatherApiFunctionOutput", { value: weatherApiFunction.functionName});

    const cert = props.certArn ? 
      Certificate.fromCertificateArn(this, 'API Certificate', props.certArn) :
      ApiStack.createCert(this, props);

    // api gateway
    const api = new RestApi(this, 'weather-api', {
      domainName: {
        domainName: props.domainName,
        certificate: cert
      },
      deployOptions: {
        stageName: 'dev'
      }
    });
    const weather = api.root.addResource("weather");
    const weatherMethod = weather.addMethod(
      'GET',
      new LambdaIntegration(weatherApiFunction)
    );
  }
  
  static createCert(scope: Construct, props: ApiStackProps) {
    return new DnsValidatedCertificate(scope, 'API Certificate', {
      hostedZone: HostedZone.fromLookup(scope, 'HostedZone', {
        domainName: props.hostedZone
      }),
      domainName: props.domainName,
      region: 'ap-southeast-2'
    });
  }
}
