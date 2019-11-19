import { Units } from '../types';

const axios = require('axios');

export default (lat: number, lon: number, units: Units=Units.SI) => {
  // get weather info from Dark Sky
  return axios.get(`${process.env.REACT_APP_WEATHER_API_URL_PREFIX}/weather?lat=${lat}&lon=${lon}&units=${units}`, {timeout: 5000});
}