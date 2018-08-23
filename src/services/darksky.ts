import { Units } from '../types';

const axios = require('axios');

export default (lat: number, lon: number, units: Units=Units.SI) => {
  // get weather info from Dark Sky
  return axios.get(`http://localhost:3001/forecast/${lat}/${lon}/${units}`, {timeout: 5000});
}