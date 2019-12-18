#!/usr/bin/env node
import 'source-map-support/register';
import { ApiStack, ApiStackProps } from './api-stack';
import cdk = require('@aws-cdk/core');
import dotenv = require('dotenv');

const STACK_NAME_PREFIX = "react-weather-api";
const stackEnv = process.env.CDK_STACK_ENV;
const stackNameSuffix = process.env.CDK_STACK_NAME_SUFFIX;
const dotEnvConfig = dotenv.config({path: `.env.${stackEnv}`});
const envConfig = { ...dotEnvConfig.parsed} as ApiStackProps;
if (dotEnvConfig.error) {
  console.error(dotEnvConfig.error);
  process.exit(1);
}

if (!stackEnv || !stackNameSuffix) {
  console.error(`CDK_STACK_ENV and CDK_STACK_NAME_SUFFIX environment variables must be set.`);
  process.exit(1);
} else {
  const fullStackName = `${STACK_NAME_PREFIX}-${stackNameSuffix}`;
  const app = new cdk.App();
  const ignored = new ApiStack(app, fullStackName, {
    ...envConfig,
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT, 
      region: process.env.CDK_DEFAULT_REGION
    }
  });
}
