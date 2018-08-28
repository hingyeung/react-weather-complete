import { createAction } from 'typesafe-actions';
import { TemperatureUnit, Units } from '../types';
import Location from '../services/Location';
import { Dispatch } from 'redux';
import darkSkyService from '../services/darksky';

// (temperature: number) => { type: 'weather/SET_TEMPERATURE'; payload: number; }
export const setTemperature = createAction('weather/SET_TEMPERATURE', resolve => {
  return (temperature: number) => resolve(temperature);
});

export const setLastUpdated = createAction('weather/SET_LAST_UPDATED', resolve => {
  return (lastUpdated: number) => resolve(lastUpdated)
});

export const setSummary = createAction('weather/SET_SUMMARY', resolve => {
  return (summary: string) => resolve(summary)
});

export const setTemperatureUnitToF = createAction(
  'weather/SET_TEMPERATURE_UNIT_TO_F', resolve => {
  return () => resolve(TemperatureUnit.F)
});

export const setTemperatureUnitToC = createAction(
  'weather/SET_TEMPERATURE_UNIT_TO_C', resolve => {
    return () => resolve(TemperatureUnit.C)
  });

// const loadWeatherData = createAsyncAction(
//   'weather/requestWeatherData',
//   'weather/requestWeatherDataSucceed',
//   'weather/requestWeatherDataFailed')<Location, DarkSkyWeatherData, Error>();

export const loadWeatherDataWithThunk = (location: Location, units: Units = Units.SI) => (dispatch: Dispatch) => {
  darkSkyService(location.lat, location.lon)
    .then((resp: any) => {
      dispatch(
        // invoking setTemperature function via exports to make unit test easier
        // https://github.com/facebook/jest/issues/936#issuecomment-214939935
        setTemperature(parseFloat(resp.data.currently.temperature))
      );
      units === Units.SI ?
        dispatch(
          setTemperatureUnitToC()
        ) :
        dispatch(
          setTemperatureUnitToF()
        );
      dispatch(
        setSummary(resp.data.currently.summary)
      );
      dispatch(
        setLastUpdated(resp.data.currently.time)
      )
    })
    .catch((error: any) => console.log(error));
};

