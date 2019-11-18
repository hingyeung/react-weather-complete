import { ActionType, getType } from 'typesafe-actions';
import * as weather from '../actions/WeatherActions';
import { TEMPERATURE_UNSET } from '../types';
type WeatherAction = ActionType<typeof weather>

export default (state: number = TEMPERATURE_UNSET, action: WeatherAction) => {
  switch (action.type) {
    case getType(weather.setTemperature):
      return action.payload;
    default:
      return state;
  }
};