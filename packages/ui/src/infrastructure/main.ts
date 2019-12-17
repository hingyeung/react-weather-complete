#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3WebhostingStack, S3WebhostingStackProps } from './s3-webhosting-stack';
import * as dotenv from 'dotenv';

const stackEnv = process.env.CDK_STACK_ENV;
const stackName = process.env.CDK_STACK_NAME;
const dotEnvConfig = dotenv.config({path: `.env.infra-${stackEnv}`});
const envConfig = { ...dotEnvConfig.parsed} as S3WebhostingStackProps;
if (dotEnvConfig.error) {
  console.error(dotEnvConfig.error);
  process.exit(1);
}

if (!stackEnv || !stackName) {
  console.error(`CDK_STACK_ENV and CDK_STACK_NAME environment variables must be set.`)
  process.exit(1);
} else {
  const app = new cdk.App();
  new S3WebhostingStack(app, stackName, {
    ...envConfig,
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT, 
      region: process.env.CDK_DEFAULT_REGION
    }
  });
}
