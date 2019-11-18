import { createAction } from 'typesafe-actions';
import Location from '../services/Location';
import { AnyAction } from "redux";
import GeocodeService from '../services/GeocodeService';
import GeocoderAddressComponent = google.maps.GeocoderAddressComponent;
import { loadWeatherDataWithThunk } from "./WeatherActions";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../types";
import GeocoderResult = google.maps.GeocoderResult;

export const setLocation = createAction('location/SET_LOCATION', resolve => {
  return (location: Location) => resolve(location);
});

export const setLocationDisplay = createAction('location/SET_LOCATION_DISPLAY', resolve => {
  return (locationDisplay: string) => resolve(locationDisplay);
});

export const setLocationWithThunk = (location: Location) => (dispatch: ThunkDispatch<AppState, void, AnyAction>) => {
  const geocodeService = new GeocodeService();
  dispatch(
    setLocation(location)
  );
  dispatch(
    loadWeatherDataWithThunk(location)
  );

  const findLocalityName = (addressComponents: GeocoderAddressComponent[]) => {
    const locality = addressComponents.find((component => component.types.some((type) => type === 'locality')));
    return locality ? locality.long_name : 'Unknown'
  };

  geocodeService.reverseGeocode(location)
    .then((geocodeResult: GeocoderResult[]) => {
      const addressComponents = geocodeResult[0].address_components;
      dispatch(
        setLocationDisplay(findLocalityName(addressComponents))
      );
    })
    .catch((error: any) => console.log(error));
};