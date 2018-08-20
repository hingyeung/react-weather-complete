const axios = require('axios');

export default (lat: number, lon: number) => {
    // get weather info from Dark Sky
    axios.get(`http://localhost:3001/forecast/${lat},${lon}`)

    // update store with the latest weather info
}