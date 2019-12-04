#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {ApiStack} from './api-stack';

const app = new cdk.App();
const ignored = new ApiStack(app, 'ApiInfraStack');
