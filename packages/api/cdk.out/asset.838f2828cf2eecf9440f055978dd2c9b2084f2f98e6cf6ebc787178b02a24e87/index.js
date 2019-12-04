"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const getKey = () => {
    return process.env.DARK_SKY_API_KEY;
};
const getCorsDomain = () => {
    return process.env.CORS_DOMAIN;
};
const buildResult = (statusCode, body) => {
    let cors = {};
    if (getCorsDomain()) {
        cors = {
            "Access-Control-Allow-Origin": getCorsDomain(),
            "Access-Control-Allow-Methods": "GET, OPTIONS"
        };
    }
    return { statusCode, body, headers: Object.assign(Object.assign({}, cors), { "Content-Type": "application/json" }) };
};
const getWeather = async (lat, lon, units) => {
    const darkSkyApiKey = getKey(), darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lon}?units=${units}`;
    console.log(darkSkyUrl);
    return axios_1.default.get(darkSkyUrl);
};
const handler = async (evt) => {
    if (!evt.queryStringParameters) {
        return buildResult(400, "request parameter missing");
    }
    const units = evt.queryStringParameters.units, lat = evt.queryStringParameters.lat, lon = evt.queryStringParameters.lon;
    try {
        const response = await getWeather(Number(lat), Number(lon), units);
        return buildResult(response.status, JSON.stringify(response.data));
    }
    catch (err) {
        return buildResult(err.response.status, err.statusText);
    }
};
exports.handler = handler;
//# sourceMappingURL=index.js.map