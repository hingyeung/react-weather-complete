import temperature from './temperature';
import { combineReducers } from "redux";
import lastUpdated from './lastUpdated';
import summary from './summary';
import location from './location';
import temperatureUnit from './temperatureUnit';

export default combineReducers({
  temperature,
  temperatureUnit,
  summary,
  location,
  lastUpdated
});