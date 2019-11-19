# Weather API Server
A simple server that proxies requests to [Dark Sky](https://darksky.net/dev/docs) API without exposing the Dark Sky API Key. Designed to be deployed to AWS Lambda.

# Dev Setup
`> mkvirtualenv weather-api-server`  
`> pip3 install aws-sam-cli`  
`> npm use`

# Watch and Compile Typescript
`> npx tsc -w`

# Package
`> infrastructure/scripts/package.sh`

# Testing locally with SAM local (must run after the Package step)
```
> DARK_SKY_API_KEY=${DARK_SKY_API_KEY} sam local invoke \
    "WeatherFunction" --template infrastructure/sam.yaml \
     -e test/data/events/apigateway-event.json 
```

# Package & Upload
```
> infrastructure/scripts/package.sh && \
    aws cloudformation package \
    --template-file infrastructure/sam.yaml \
    --s3-bucket ${S3_BUCKET} \
    --s3-prefix ${S3_PRFIX} \
    --output-template-file dist/weather-api-server.cfn
```

# Deploy
```
> npm run cf-deploy-stack \
    ${DARK_SKY_API_KEY} ${DOMAIN_ALLOWED_FOR_CORS}  ${STACKNAME}
```
e.g. `npm run cf-deploy-stack abc123456 http://www.example.com my-weather-api-stack`
