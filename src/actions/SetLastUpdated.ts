import {ActionCreator} from "redux";
import {ActionType, SetLastUpdatedAction} from "../types";

const action: ActionCreator<SetLastUpdatedAction> = (timestamp: number) => {
    return {
        type: ActionType.SET_LAST_UPDATED,
        payload: timestamp
    }
};

export default action;