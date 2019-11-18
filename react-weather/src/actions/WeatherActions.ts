import { createAction } from 'typesafe-actions';
import { TemperatureUnit, Units } from '../types';
import Location from '../services/Location';
import { Dispatch } from 'redux';
import darkSkyService from '../services/darksky';

// (temperature: number) => { type: 'weather/SET_TEMPERATURE'; payload: number; }
export const setTemperature = createAction('weather/SET_TEMPERATURE', resolve => {
  return (temperature: number) => resolve(temperature);
});

export const setApparentTemperature = createAction('weather/SET_APPARENT_TEMPERATURE', resolve => {
  return (apparentTemperature: number) => resolve(apparentTemperature);
});

export const setLastUpdated = createAction('weather/SET_LAST_UPDATED', resolve => {
  return (lastUpdated: number) => resolve(lastUpdated)
});

export const setIcon = createAction('weather/SET_ICON', resolve => {
  return (icon: string) => resolve(icon)
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

export const toggleTemperatureUnit = createAction(
  'weather/TOGGLE_TEMPERATURE_UNIT', resolve => {
    return () => resolve()
  }
);

export const loadWeatherDataWithThunk = (location: Location, units: Units = Units.SI) => (dispatch: Dispatch) => {
  darkSkyService(location.lat, location.lon)
    .then((resp: any) => {
      dispatch(
        // invoking setTemperature function via exports to make unit test easier
        // https://github.com/facebook/jest/issues/936#issuecomment-214939935
        setTemperature(parseFloat(resp.data.currently.temperature))
      );
      dispatch(
        setApparentTemperature(parseFloat(resp.data.currently.apparentTemperature))
      );
      units === Units.SI ?
        dispatch(
          setTemperatureUnitToC()
        ) :
        dispatch(
          setTemperatureUnitToF()
        );
      dispatch(
        setSummary(resp.data.hourly.summary)
      );
      dispatch(
        setLastUpdated(resp.data.currently.time)
      );
      dispatch(
        setIcon(resp.data.currently.icon)
      );
    })
    .catch((error: any) => console.log(error));
};

