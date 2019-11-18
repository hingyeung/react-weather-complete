#!/bin/bash
set -e

DARK_SKY_API_KEY=$1
CORS_DOMAIN=$2
STACK_NAME=$3
STACK_NAME="weather-api-server-${STACK_NAME}"

echo
echo "Building ${STACK_NAME}"
echo

aws  cloudformation deploy \
     --template-file dist/weather-api-server.cfn \
     --stack-name ${STACK_NAME} \
     --capabilities CAPABILITY_IAM \
     --parameter-overrides \
        CorsDomain=${CORS_DOMAIN} \
        DarkSkyAPIKey=${DARK_SKY_API_KEY} && \
    aws cloudformation describe-stacks --stack-name ${STACK_NAME} \
        --query 'Stacks[0].Outputs'