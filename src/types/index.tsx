import { Action } from 'redux';
import Location from '../services/Location';

export enum TemperatureUnit {
  C = 'C',
  F = 'F'
}

export enum Units {
  SI = 'si',
  US = 'us'
}

export interface AppState {
  location: Location;
  temperature: number;
  summary: string;
  temperatureUnit: TemperatureUnit;
}

// Component Props
export interface IReactWeatherProps {
  location: Location;
  loadWeatherData: (location: Location) => void;
}

export interface ITemperatureProps {
  temperature: number;
  temperatureUnit: TemperatureUnit;
  onToggleUnit: () => void;
}

export interface ISummaryProps {
  text: string;
}

export interface IAppProps {
  updateCurrentLocation: (location: Location) => void
}

// Action Types
export enum ActionType {
  SET_LOCATION,
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

export interface SetLocationAction extends Action {
  type: ActionType.SET_LOCATION,
  payload: Location
}
