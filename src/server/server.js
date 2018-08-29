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
let errorCode;

server({port: 3001}, cors, [
  get('/forecast/:lat/:lon/:units', async ctx => {
    let responseFromDS;
    let promise = axios.get(`https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${ctx.params.lat},${ctx.params.lon}?units=${ctx.params.units}`);
    promise
      .then((resp) => {
        responseFromDS = resp.data;
      })
      .catch((error) => {
        errorCode = error.response.status;
      });
    await promise;
    return responseFromDS;
  }),
  error(ctx => status(errorCode).send(ctx.error.message))
]);