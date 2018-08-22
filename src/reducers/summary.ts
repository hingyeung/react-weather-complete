import { ActionType, SetSummaryAction } from "../types";

export default (state: string = '', action: SetSummaryAction) => {
  switch (action.type) {
    case ActionType.SET_SUMMARY:
      return action.payload;
    default:
      return state;
  }
}
