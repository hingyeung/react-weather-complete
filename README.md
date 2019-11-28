## react-weather-combo

### Install Dependencies
AWS CDK  
`npm install -g aws-cdk`  
Lerna  
`npm install -g lerna`

### Useful Tasks
Build artefact for production environment  
`> lenra build`  

Build artefactor for test environment  
`> lerna build:test`  

Deploy stack `react-weather-test` to test environment  
`> CDK_STACK_NAME=react-weather-test lerna cdk:deploy:test`  

Destroy stack `react-weather-dev` (I couldn't get the `cdk destroy` command working with the `lerna`)  
`> cd packages/ui-infra && CDK_STACK_NAME=react-weather-dev yarn run cdk:destroy:test`  

