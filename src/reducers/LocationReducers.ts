import { ActionType, getType } from 'typesafe-actions';
import * as location from '../actions/LocationActions';
import Location from '../services/Location';
export type LocationAction = ActionType<typeof location>

export default (state: Location = Location.UNSET, action: LocationAction) => {
  switch (action.type) {
    case getType(location.setLocation):
      return action.payload;
    default:
      return state;
  }
};