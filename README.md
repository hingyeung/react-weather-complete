## react-weather-combo
`lenra build`
Build artefact for production environment

`lerna build:test`  
Build artefactor for test environment

`CDK_STACK_NAME=react-weather-test lerna cdk:deploy:test`  
Deploy stack `react-weather-test` to test environment

`cd packages/ui-infra && CDK_STACK_NAME=react-weather-dev yarn run cdk:destroy:test`  
Destroy stack `react-weather-dev` (I couldn't get the `cdk destroy` command working with the `lerna`)
