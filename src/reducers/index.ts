import location from './LocationReducers';
import temperature from './TemperatureReducers';
import apparentTemperature from './ApparentTemperatureReducers';
import { combineReducers } from 'redux';
import summary from './SummaryReducers';
import lastUpdated from './LastUpdatedReducers';
import temperatureUnit from './TemperatureUnitReducers';
import icon from './IconReducers';
import showLocationSelector from './ShowLocationSelectorReducers'

export default combineReducers({
  location,
  temperature,
  apparentTemperature,
  summary,
  lastUpdated,
  temperatureUnit,
  icon,
  showLocationSelector
});