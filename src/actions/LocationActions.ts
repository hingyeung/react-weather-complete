import { createAction } from 'typesafe-actions';
import Location from '../services/Location';
import { Dispatch } from "redux";
import GeocodeService from '../services/GeocodeService';
// import * as googlemaps from 'googlemaps';
import GeocoderAddressComponent = google.maps.GeocoderAddressComponent;

export const setLocation = createAction('location/SET_LOCATION',resolve => {
  return (location: Location) => resolve(location);
});

export const setLocationDisplay = createAction('location/SET_LOCATION_DISPLAY', resolve => {
  return (locationDisplay: string) => resolve(locationDisplay);
});

export const setLocationWithThunk = (location: Location) => (dispatch: Dispatch) => {
  const geocodeService = new GeocodeService();
  dispatch(
    setLocation(location)
  );

  const findLocalityName = (addressComponents: GeocoderAddressComponent[]) => {
    const locality = addressComponents.find((component => component.types.some((type) => type === 'locality')));
    return locality ? locality.long_name : 'Unknown'
  };

  geocodeService.reverseGeocode(location)
    .then((resp: any) => {
      const geocodeResult = resp.data;
      if (geocodeResult.status === 'OK') {
        const addressComponents = geocodeResult.results[0].address_components;
        dispatch(
          setLocationDisplay(findLocalityName(addressComponents))
        );
      }
    })
    .catch((error: any) => console.log(error));
};