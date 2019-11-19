import { ActionType, getType } from 'typesafe-actions';
import * as weather from '../actions/WeatherActions';
import {TIMESTAMP_UNSET} from '../constants';
type WeatherAction = ActionType<typeof weather>

export default (state: number = TIMESTAMP_UNSET, action: WeatherAction) => {
  console.log('action:', action.type);
  switch (action.type) {
    case getType(weather.setLastUpdated):
      return action.payload;
    default:
      return state;
  }
};