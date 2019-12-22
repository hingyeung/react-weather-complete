import { Units } from '../types';

const axios = require('axios');

export default (lat: number, lon: number, units: Units=Units.SI) => {
  // get weather info from Dark Sky
  if (process.env.REACT_APP_FAKE_LAT && process.env.REACT_APP_FAKE_LNG) {
    return axios.get(`${process.env.REACT_APP_WEATHER_API_URL_PREFIX}/weather?lat=${process.env.REACT_APP_FAKE_LAT}&lon=${process.env.REACT_APP_FAKE_LNG}&units=${units}`, {timeout: 5000});
  }
  return axios.get(`${process.env.REACT_APP_WEATHER_API_URL_PREFIX}/weather?lat=${lat}&lon=${lon}&units=${units}`, {timeout: 5000});
}