import axios, { AxiosResponse } from 'axios';
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

const getKey = () => {
  return process.env.DARK_SKY_API_KEY;
};

const getCorsDomain = () => {
  return process.env.CORS_DOMAIN;
};

const buildResult = (statusCode: number, body: any): APIGatewayProxyResult => {
  let cors = {};
  if (getCorsDomain()) {
    cors = {
      "Access-Control-Allow-Origin": getCorsDomain(),
      "Access-Control-Allow-Methods": "GET, OPTIONS"
    };
  }
  return {statusCode, body, headers: {
      ...cors,
      "Content-Type": "application/json"
  }};
};

const getWeather = async (lat: number, lon: number, units: string) => {
  const darkSkyApiKey = getKey(),
    darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lon}?units=${units}`;

  console.log(darkSkyUrl);
  return axios.get(darkSkyUrl);
};

const handler: APIGatewayProxyHandler = async (evt: APIGatewayProxyEvent) => {

  if (!evt.queryStringParameters) {
    return buildResult(400, "request parameter missing");
  }

  const units = evt.queryStringParameters.units,
    lat = evt.queryStringParameters.lat,
    lon = evt.queryStringParameters.lon;


  try {
    const response = await getWeather(Number(lat), Number(lon), units);
    return buildResult(response.status, JSON.stringify(response.data));
  } catch (err) {
    return buildResult(err.response.status, err.statusText);
  }
};

export { handler };