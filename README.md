## react-weather-combo

### Install Dependencies
AWS CDK & Lerna  
`> npm install -g aws-cdk lerna`  
`> lerna bootstrap`  

### Setup environment config
`> cp .env-template .env.test`  
Modify .env.test accordingly.

### Useful Tasks
Build artefact for production environment  
`> lenra run build`  

Build artefact for test environment  
`> lerna run build:test`  

Preview generated CF template for UI  
`> CDK_STACK_NAME=react-weather-ui-test AWS_PROFILE=your_profile lerna run synth:ui:test`  

Preview generated CF template for API  
`> CDK_STACK_NAME=react-weather-api-test AWS_PROFILE=your_profile lerna run synth:api:test`  

Show proposed changes for UI Stack `react-weather-ui-test`  
`> CDK_STACK_NAME=react-weather-ui-test AWS_PROFILE=your_profile lerna run diff:ui:test`  

Show proposed changes for API Stack `react-weather-api-test`  
`> CDK_STACK_NAME=react-weather-api-test AWS_PROFILE=your_profile lerna run diff:api:test`  

Deploy UI stack `react-weather-ui-test` to test environment  
`> CDK_STACK_NAME=react-weather-ui-test AWS_PROFILE=your_profile lerna run deploy:ui:test`  

Deploy API stack `react-weather-api-test` to test environment  
`> CDK_STACK_NAME=react-weather-api-test AWS_PROFILE=your_profile lerna run deploy:api:test`  

Destroy UI stack `react-weather-ui-test` (I couldn't get the `cdk destroy` command working with the `lerna`)  
`> cd packages/ui-infra && CDK_STACK_NAME=react-weather-ui-test AWS_PROFILE=your_profile npm run destroy:ui:test`  

Destroy API stack `react-weather-api-test`  
`> cd packages/ui-infra && CDK_STACK_NAME=react-weather-api-test AWS_PROFILE=your_profile npm run destroy:api:test`  