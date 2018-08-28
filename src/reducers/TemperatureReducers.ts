import { ActionType, getType } from 'typesafe-actions';
import * as weather from '../actions/WeatherActions';
type WeatherAction = ActionType<typeof weather>

export default (state: number = 0, action: WeatherAction) => {
  switch (action.type) {
    case getType(weather.setTemperature):
      return action.payload;
    default:
      return state;
  }
};