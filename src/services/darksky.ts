const axios = require('axios');

export default (lat: number, lon: number) => {
  // get weather info from Dark Sky
  return axios.get(`http://localhost:3001/forecast/${lat}/${lon}`, {timeout: 5000});
}