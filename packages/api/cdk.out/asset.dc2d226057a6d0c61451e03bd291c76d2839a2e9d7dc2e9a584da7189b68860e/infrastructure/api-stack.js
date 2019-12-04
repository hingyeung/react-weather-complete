"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const path_1 = require("path");
const dotenv = require("dotenv");
const stackEnv = process.env.CDK_STACK_ENV;
const stackName = process.env.CDK_STACK_NAME;
const envConfig = Object.assign({}, dotenv.config({ path: `.env.${stackEnv}` }).parsed);
class ApiStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        const weatherApiFunction = new aws_lambda_1.Function(this, 'weatherApiFunction', {
            runtime: aws_lambda_1.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            code: aws_lambda_1.Code.asset(path_1.join(__dirname, '..')),
            environment: { DARK_SKY_API_KEY: envConfig.DARK_SKY_API_KEY },
        });
    }
}
exports.ApiStack = ApiStack;
//# sourceMappingURL=api-stack.js.map