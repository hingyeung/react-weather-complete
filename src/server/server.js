const server = require('server');
const {get} = server.router;
const {error} = server.router;
const {status} = server.reply;
const axios = require('axios');
const {header} = server.reply;
const cachePeriod = process.argv[2];

const cors = [
  ctx => header("Access-Control-Allow-Origin", "*"),
  ctx => header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  ctx => cachePeriod ? header("Cache-Control", `max-age=${cachePeriod}`) : null,
  ctx => ctx.method.toLowerCase() === 'options' ? 200 : false
];

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY || 'set_your_dark_sky_api_key';
const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY || 'set_your_google_map_api_key';
let errorCode;

const simpleGETHandler = (requestUrlBuilderFn) => {
  return async ctx => {
    let response;
    const requestUrl = requestUrlBuilderFn(ctx);
    const promise = axios.get(requestUrl);
    promise
      .then((resp) => {
        response = resp.data;
      })
      .catch((error) => {
        errorCode = error.response.status;
      });
    await promise;
    return response;
  };
};

server({port: 3001}, cors, [
  get('/forecast/:lat/:lon/:units',
    simpleGETHandler(ctx => `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${ctx.params.lat},${ctx.params.lon}?units=${ctx.params.units}`)),
  get('/reverse-geocode/:lat/:lon',
    // simpleGETHandler(ctx => `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAP_API_KEY}&latlng=${ctx.params.lat},${ctx.params.lon}`)),
    simpleGETHandler(ctx => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${ctx.params.lat},${ctx.params.lon}`)),
  error(ctx => status(500).send(ctx.error.message))
]);