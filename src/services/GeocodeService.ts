import Location from "./Location";

const axios = require('axios');
class GeocodeService {
  reverseGeocode(location: Location) {
    return axios.get(`http://localhost:3001/reverse-geocode/${location.lat}/${location.lon}`, {timeout: 5000});
  }
}

export default GeocodeService;