import {SET_TEMPERATURE} from '../constants'

export interface AppState {
    temperature: number
}

export interface SetTemperatureAction {
    type: SET_TEMPERATURE;
    payload: number;
}

export type ReducerFunction = (state: AppState, action: any) => any