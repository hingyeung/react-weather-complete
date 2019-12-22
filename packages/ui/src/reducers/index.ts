import location from './LocationReducers';
// import temperature from './TemperatureReducers';
// import apparentTemperature from './ApparentTemperatureReducers';
import { combineReducers } from 'redux';
// import summary from './SummaryReducers';
// import time from './LastUpdatedReducers';
import temperatureUnit from './TemperatureUnitReducers';
// import icon from './IconReducers';
import showLocationSelector from './ShowLocationSelectorReducers'
import currently from './CurrentlyReducers';
// import { nestedCombineReducers } from 'nested-combine-reducers';
import hourlyForecasts from './HourlyForecastsReducers';

export default combineReducers({
  // currently: combineReducers({
  //   temperature,
  //   apparentTemperature,
  //   summary,
  //   time,
  //   icon
  // }),
  currently,
  hourlyForecasts,
  location,
  temperatureUnit,
  showLocationSelector
});

// const reducerMap = {
//   currently: {
//     temperature,
//     apparentTemperature,
//     summary,
//     time,
//     icon
//   },
//   location,
//   temperatureUnit,
//   showLocationSelector
// };

// export default nestedCombineReducers(reducerMap, combineReducers);