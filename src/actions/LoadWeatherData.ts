import setTemperature from "../action_factories/SetTemperature";
import setTemperatureUnit from "../action_factories/SetTemperatureUnit";
import setSummary from "../action_factories/SetSummary";
import darkSkyService from '../services/darksky'
import { Dispatch } from 'redux';
import { TemperatureUnit, Units } from '../types';

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