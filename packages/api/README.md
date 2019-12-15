# Weather API Server
A simple server that proxies requests to [Dark Sky](https://darksky.net/dev/docs) API without exposing the Dark Sky API Key. Designed to be deployed to AWS Lambda.

# Prerequisites
* AWS SAM CLI
* Docker

# Environment Configuration
`> cp .env-template .env.<environment>`  

# Watch and Compile Typescript
`> npm run watch`

# Package
`> npm run package`

# Testing locally with SAM local (must run after the Package step)
`> CDK_STACK_NAME=weather-api-server-test npm run invoke`

# Deploy
`> CDK_STACK_NAME=weather-api-server-test npm run deploy:api:test`
