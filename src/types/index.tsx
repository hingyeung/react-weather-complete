import { Action } from 'redux';

export enum TemperatureUnit {
  C = 'C',
  F = 'F'
}

export enum Units {
  SI = 'si',
  US = 'us'
}

export interface AppState {
  temperature: number;
  summary: string;
  temperatureUnit: TemperatureUnit;
}

// Component Props
export interface IReactWeatherProps {
  loadWeatherData: (lat: number, lon: number) => void;
}

export interface ITemperatureProps {
  temperature: number;
  temperatureUnit: TemperatureUnit
}

export interface ISummaryProps {
  text: string;
}

// Action Types
export enum ActionType {
  SET_TEMPERATURE,
  SET_TEMPERATURE_UNIT,
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

export interface SetTemperatureUnitAction extends Action {
  type: ActionType.SET_TEMPERATURE_UNIT,
  payload: TemperatureUnit
}
