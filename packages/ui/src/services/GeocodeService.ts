/// <reference types="@types/googlemaps" />
import Location from "./Location";
// import GeocoderResult = google.maps.GeocoderResult;
// import GeocoderStatus = google.maps.GeocoderStatus;

class GeocodeService {
  reverseGeocode(location: Location) {
    return new Promise<google.maps.GeocoderResult[]>(function (resolve, reject) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        {
          location: {
            lat: location.lat, lng: location.lon
          }
        },
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          // do not confuse
          //    window.google.maps.GeocoderStatus.OK (from Google Maps JS library)
          // with
          //    google.maps.GeocoderStatus.OK (from DefinitelyTyped type definition)
          if (status === window.google.maps.GeocoderStatus.OK) {
            resolve(results);
          } else {
            reject(status);
          }
        }
      );
    });
  }
}

export default GeocodeService;