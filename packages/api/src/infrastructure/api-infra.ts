#!/usr/bin/env node
import 'source-map-support/register';
import { ApiStack, ApiStackProps } from './api-stack';
import cdk = require('@aws-cdk/core');
import dotenv = require('dotenv');

const stackEnv = process.env.CDK_STACK_ENV;
const stackName = process.env.CDK_STACK_NAME;
const envConfig = { ...dotenv.config({path: `.env.${stackEnv}`}).parsed} as ApiStackProps;

if (!stackEnv || !stackName) {
  console.error(`CDK_STACK_ENV and CDK_STACK_NAME environment variables must be set.`);
  process.exit(1);
} else {
  const app = new cdk.App();
  const ignored = new ApiStack(app, stackName, {
    ...envConfig,
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT, 
      region: process.env.CDK_DEFAULT_REGION
    }
  });
}
