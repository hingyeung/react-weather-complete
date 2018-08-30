// import temperature from './temperature';
// import lastUpdated from './lastUpdated';
// import summary from './summary';
// import location from './location';
// import temperatureUnit from './temperatureUnit';
import location from './LocationReducers';
import temperature from './TemperatureReducers';
import { combineReducers } from 'redux';
import summary from './SummaryReducers';
import lastUpdated from './LastUpdatedReducers';
import temperatureUnit from './TemperatureUnitReducers';
import icon from './IconReducers';
import showLocationSelector from './ShowLocationSelectorReducers'

// export default combineReducers({
//   temperature,
//   temperatureUnit,
//   summary,
//   location,
//   lastUpdated
// });
export default combineReducers({
  location,
  temperature,
  summary,
  lastUpdated,
  temperatureUnit,
  icon,
  showLocationSelector
});