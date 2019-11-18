import { ActionType, getType } from 'typesafe-actions';
import * as weather from '../actions/WeatherActions';
type WeatherAction = ActionType<typeof weather>

export default (state: string | null = null, action: WeatherAction) => {
  switch (action.type) {
    case getType(weather.setIcon):
      return action.payload;
    default:
      return state;
  }
};