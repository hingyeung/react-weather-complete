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

export const TEMPERATURE_UNSET = -99999;
export const CURRENTLY_UNSET: IWeatherInfo = {
  temperature: TEMPERATURE_UNSET,
  apparentTemperature: TEMPERATURE_UNSET,
  summary: "",
  time: 0,
  icon: ""
};

export interface IWeatherInfo {
  temperature: number;
  apparentTemperature: number;
  summary: string;
  time: number;
  icon: string;
}

export interface AppState {
  location: Location;
  currently: IWeatherInfo;
  hourlyForecasts: IWeatherInfo[];
  temperatureUnit: TemperatureUnit;
  showLocationSelector: boolean;
}

// Component Props
export interface IReactWeatherProps {
  location: Location;
  loadWeatherData: (location: Location) => void;
  showLocationSelector: boolean;
}

export interface ITemperatureProps {
  temperature: number;
  apparentTemperature: number;
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

export interface IWeatherIconProps {
  icon: string | null;
}

export interface ILocationDisplayProps {
  name: string;
  onClick: () => void;
}

export interface ILocationSelectorProps {
  defaultPosition: {lat: number, lng: number};
  onLocationChange: (selectedLocation: any) => void
}

declare global {
  interface Window {
    google: any;
  }
}
