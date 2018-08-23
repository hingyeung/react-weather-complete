import { ActionType, SetLocationAction } from '../types';
import Location from '../services/Location'

export default (state: Location = Location.UNSET, action: SetLocationAction) => {
  switch (action.type) {
    case ActionType.SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}