import { createAction } from 'typesafe-actions';
import Location from '../services/Location';
import { AnyAction } from "redux";
import GeocodeService from '../services/GeocodeService';

import * as weatherActions from "./WeatherActions";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../types";
// import GeocoderAddressComponent = google.maps.GeocoderAddressComponent;
// import GeocoderResult = google.maps.GeocoderResult;

export const setLocation = createAction('location/SET_LOCATION', resolve => {
  return (location: Location) => resolve(location);
});

export const setLocationDisplay = createAction('location/SET_LOCATION_DISPLAY', resolve => {
  return (locationDisplay: string) => resolve(locationDisplay);
});

export const setLocationWithThunk = (location: Location) => (dispatch: ThunkDispatch<AppState, void, AnyAction>) => {
  const geocodeService = new GeocodeService();
  dispatch(
    // see exported "lib" object below
    lib.setLocation(location)
  );
  dispatch(
    weatherActions.lib.loadWeatherDataWithThunk(location)
  );

  const findLocalityName = (addressComponents: google.maps.GeocoderAddressComponent[]) => {
    const locality = addressComponents.find((component => component.types.some((type) => type === 'locality')));
    return locality ? locality.long_name : 'Unknown'
  };

  geocodeService.reverseGeocode(location)
    .then((geocodeResult: google.maps.GeocoderResult[]) => {
      const addressComponents = geocodeResult[0].address_components;
      dispatch(
        lib.setLocationDisplay(findLocalityName(addressComponents))
      );
    })
    .catch((error: any) => console.log(error));
};

// This exported object helps unit tests to mock other exported function
// in the same module.
// https://luetkemj.github.io/170421/mocking-modules-in-jest
export const lib = {
  setLocation,
  setLocationDisplay
}