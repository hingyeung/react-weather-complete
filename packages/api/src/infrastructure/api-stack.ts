import cdk = require('@aws-cdk/core');
import {Function, Runtime, Code} from '@aws-cdk/aws-lambda';
import {join} from 'path';
import dotenv = require('dotenv');
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';

interface EnvConfig {
  [DARK_SKY_API_KEY: string]: string;
}

export interface ApiStackProps extends cdk.StackProps {
  DARK_SKY_API_KEY: string;
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

    // api gateway
    const api = new RestApi(this, 'api', {
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
}
