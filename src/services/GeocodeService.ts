import Location from "./Location";

const axios = require('axios');
class GeocodeService {
  reverseGeocode(location: Location) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB3lFMeUQ3ZYY8aFbuK_BTJ_Oq1L2u0ev0&latlng=${location.lat},${location.lon}`, {timeout: 5000});
  }
}

export default GeocodeService;