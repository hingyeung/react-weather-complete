import * as weather from '../actions/WeatherActions';
import { getType } from 'typesafe-actions';
import { IWeatherInfo, CURRENTLY_UNSET, WeatherAction } from '../types';

export default (state: IWeatherInfo = CURRENTLY_UNSET, action: WeatherAction) => {
  switch (action.type) {
    case getType(weather.setCurrently):
      return action.payload;
    default:
      return state;
  }
};