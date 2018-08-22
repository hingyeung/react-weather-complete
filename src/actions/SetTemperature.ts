import { ActionCreator } from 'redux';
import { ActionType, SetTemperatureAction } from '../types';


const action: ActionCreator<SetTemperatureAction> = (temperature: number) => {
    return {
        type: ActionType.SET_TEMPERATURE,
        payload: temperature
    }
};

export default action;