import { ActionType, getType } from "typesafe-actions";
import * as ui from '../actions/UIActions';
export type UIAction = ActionType<typeof ui>

export default (state: boolean = false, action: UIAction) => {
  switch (action.type) {
    case getType(ui.toggleShowLocationSelector):
      return !state;
    default:
      return state;
  }
};