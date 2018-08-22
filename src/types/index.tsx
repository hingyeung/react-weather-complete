import { Action } from 'redux';

export interface AppState {
  temperature: number;
  summary: string;
}

// Component Props
export interface IReactWeatherProps {
  loadWeatherData: (lat: number, lon: number) => void;
}

export interface ITemperatureProps {
  temperature: number;
}

export interface ISummaryProps {
  text: string;
}

// Action Types
export enum ActionType {
  SET_TEMPERATURE,
  SET_SUMMARY
}

// Actions
export interface SetTemperatureAction extends Action {
  type: ActionType.SET_TEMPERATURE,
  payload: number
}

export interface SetSummaryAction extends Action {
  type: ActionType.SET_SUMMARY,
  payload: string
}
