import { Action } from 'redux';

export interface AppState {
  temperature: number
}

// Component Props
export interface IReactWeatherProps {
  loadWeatherData: (lat: number, lon: number) => void;
}

export interface ITemperatureProps {
  temperature: number;
}

// Action Types
export enum ActionType {
  SET_TEMPERATURE
}

// Actions
export interface SetTemperatureAction extends Action {
  type: ActionType.SET_TEMPERATURE,
  payload: number
}
