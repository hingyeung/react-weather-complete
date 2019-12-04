#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const api_stack_1 = require("./api-stack");
const app = new cdk.App();
const ignored = new api_stack_1.ApiStack(app, 'ApiInfraStack');
//# sourceMappingURL=api-infra.js.map