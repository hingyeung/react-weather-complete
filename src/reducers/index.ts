import temperature from './temperature';
import { combineReducers } from "redux";
import summary from './summary';
import temperatureUnit from './temperatureUnit';

export default combineReducers({
  temperature,
  temperatureUnit,
  summary
});