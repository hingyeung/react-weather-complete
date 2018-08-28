import Location from '../services/Location';
import { ActionType } from 'typesafe-actions';

import * as weather from '../actions/WeatherActions';
export type WeatherAction = ActionType<typeof weather>

export interface DarkSkyWeatherData {
  temperature: number;
}

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
  lastUpdated: number;
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

export interface ILastUpdatedProps {
  timestamp: number;
}
