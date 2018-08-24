import { ActionType, SetLastUpdatedAction } from "../types";
import { TIMESTAMP_UNSET } from '../constants';

export default (state = TIMESTAMP_UNSET, action: SetLastUpdatedAction) => {
  switch (action.type) {
    case ActionType.SET_LAST_UPDATED:
      return action.payload;
    default:
      return state;
  }
}