import cdk = require('@aws-cdk/core');
import {Function, Runtime, Code} from '@aws-cdk/aws-lambda';
import {join} from 'path';
import dotenv = require('dotenv');

interface EnvConfig {
  [DARK_SKY_API_KEY: string]: string;
}

const stackEnv = process.env.CDK_STACK_ENV;
const stackName = process.env.CDK_STACK_NAME;
const envConfig = {...dotenv.config({path: `.env.${stackEnv}`}).parsed} as
    EnvConfig;

export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const weatherApiFunction = new Function(this, 'weatherApiFunction', {
      runtime: Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: Code.asset(join(__dirname, '..')),
      environment: {DARK_SKY_API_KEY: envConfig.DARK_SKY_API_KEY},
    });

    // Output the function name, which is needed when invoking the function
    // using `sam local invoke "function_logical_id_from_generated_cf_template"`.
    // Hoping for better integration between CDK and SAM soon:
    // https://github.com/aws/aws-cdk/issues/716
    new cdk.CfnOutput(this, "weatherApiFunctionOutput", { value: weatherApiFunction.functionName});
  }
}
