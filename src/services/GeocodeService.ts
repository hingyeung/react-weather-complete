import Location from "./Location";

const axios = require('axios');
class GeocodeService {
  reverseGeocode(location: Location) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lon}`, {timeout: 5000});
  }
}

export default GeocodeService;