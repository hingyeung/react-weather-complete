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

Build artefactor for test environment  
`> lerna run build:test`  

Show generated CF template
`> CDK_STACK_NAME=react-weather-test AWS_PROFILE=your_profile lerna run cdk:synth:test`

Deploy stack `react-weather-test` to test environment  
`> CDK_STACK_NAME=react-weather-test AWS_PROFILE=your_profile lerna run cdk:deploy:test`  

Destroy stack `react-weather-dev` (I couldn't get the `cdk destroy` command working with the `lerna`)  
`> cd packages/ui-infra && CDK_STACK_NAME=react-weather-dev AWS_PROFILE=your_profile yarn run cdk:destroy:test`  

