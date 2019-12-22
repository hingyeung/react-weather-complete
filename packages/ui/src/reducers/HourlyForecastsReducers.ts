import { IWeatherInfo, WeatherAction } from "../types";
import * as weather from '../actions/WeatherActions';
import { getType } from "typesafe-actions";

export default (state: IWeatherInfo[] = [], action: WeatherAction) => {
  switch (action.type) {
    case getType(weather.setHourlyForecasts):
      return action.payload;
    default:
      return state;
  }
}