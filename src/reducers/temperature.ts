import {SET_TEMPERATURE} from '../constants'
import {SetTemperatureAction} from "../types/index";

export default (state: number = 0, action: SetTemperatureAction) => {
    switch (action.type) {
        case SET_TEMPERATURE:
            return action.payload;
        default:
            return state;
    }
};
