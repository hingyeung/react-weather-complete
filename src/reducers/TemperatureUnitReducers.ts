import { getType } from 'typesafe-actions';
import * as weather from '../actions/WeatherActions';
import { TemperatureUnit, WeatherAction } from '../types';

export default (state: TemperatureUnit = TemperatureUnit.C, action: WeatherAction) => {
  switch (action.type) {
    case getType(weather.setTemperatureUnitToC):
      return action.payload;
    case getType(weather.setTemperatureUnitToF):
      return action.payload;
    case getType(weather.toggleTemperatureUnit):
      return state === TemperatureUnit.C ? TemperatureUnit.F : TemperatureUnit.C;
    default:
      return state;
  }
};