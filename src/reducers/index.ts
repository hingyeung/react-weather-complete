import temperature from './temperature';
import { combineReducers } from "redux";
import summary from './summary';

export default combineReducers({
  temperature,
  summary
});