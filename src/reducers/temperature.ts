import { ActionType, SetTemperatureAction } from "../types";

export default (state: number = 0, action: SetTemperatureAction) => {
    switch (action.type) {
        case ActionType.SET_TEMPERATURE:
            return action.payload;
        default:
            return state;
    }
};
