import { createAction } from 'typesafe-actions';
import { TemperatureUnit, Units, IWeatherInfo } from '../types';
import Location from '../services/Location';
import { Dispatch } from 'redux';
import darkSkyService from '../services/darksky';

// (temperature: number) => { type: 'weather/SET_TEMPERATURE'; payload: number; }
export const setTemperature = createAction('weather/SET_TEMPERATURE', resolve => {
  return (temperature: number) => resolve(temperature);
});

export const setCurrently = createAction('weather/SET_CURRENTLY', resolve => {
  return (currently: IWeatherInfo) => resolve(currently);
});

export const setHourlyForecasts = createAction('weather/SET_HOURLY_FORECASTS', resolve => {
  return (hourlyForecasts: IWeatherInfo[]) => resolve(hourlyForecasts);
});

// the following actions can be removed later
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
// the above actions can be removed later

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
        // see exported "lib" object below
        lib.setCurrently(resp.data.currently)
      );
      dispatch(
        lib.setHourlyForecasts(resp.data.hourly.data)
      );
      // dispatch(
      //   // see exported "lib" object below
      //   lib.setTemperature(parseFloat(resp.data.currently.temperature))
      // );
      // dispatch(
      //   lib.setApparentTemperature(parseFloat(resp.data.currently.apparentTemperature))
      // );
      units === Units.SI ?
        dispatch(
          lib.setTemperatureUnitToC()
        ) :
        dispatch(
          lib.setTemperatureUnitToF()
        );
      // dispatch(
      //   lib.setSummary(resp.data.hourly.summary)
      // );
      // dispatch(
      //   lib.setLastUpdated(resp.data.currently.time)
      // );
      // dispatch(
      //   lib.setIcon(resp.data.currently.icon)
      // );
    })
    .catch((error: any) => console.log(error));
};

// This exported object helps unit tests to mock other exported function
// in the same module.
// https://luetkemj.github.io/170421/mocking-modules-in-jest
export const lib = {
  setCurrently,
  setHourlyForecasts,
  setTemperature,
  // setSummary,
  // setLastUpdated,
  // setApparentTemperature,
  setTemperatureUnitToC,
  setTemperatureUnitToF,
  // setIcon,
  loadWeatherDataWithThunk
};