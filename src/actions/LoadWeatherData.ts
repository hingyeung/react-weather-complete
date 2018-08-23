import { setSummary, setTemperature, setTemperatureUnit } from "./index";
import darkSkyService from '../services/darksky'
import { Dispatch } from 'redux';
import { TemperatureUnit, Units } from '../types/index';

// this action uses Thunk middleware (https://github.com/reduxjs/redux-thunk)
// Return a function that accepts `dispatch`
export default (lat: number, lon: number, units: Units = Units.SI) => (dispatch: Dispatch) => {
  darkSkyService(lat, lon)
    .then((resp: any) => {
      dispatch(
        setTemperature(parseFloat(resp.data.currently.temperature))
      );
      units === Units.SI ?
        dispatch(
          setTemperatureUnit(TemperatureUnit.C)
        ) :
        dispatch(
          setTemperatureUnit(TemperatureUnit.F)
        );
      dispatch(
        setSummary(resp.data.currently.summary)
      );
    })
    .catch((error: any) => console.log(error));
}