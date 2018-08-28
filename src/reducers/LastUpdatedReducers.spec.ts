import lastUpdatedReducer from './LastUpdatedReducers'
import { setLastUpdated, setTemperature } from '../actions/WeatherActions';
import { TIMESTAMP_UNSET } from '../constants';

describe('LastUpdated reducer', () => {
  it('should return new timestamp', () => {
    expect(lastUpdatedReducer(10, setLastUpdated(20))).toEqual(20);
  });

  it('should use default timestamp', () => {
    // using "incorrect" setTemperature action
    expect(lastUpdatedReducer(undefined, setTemperature(10))).toEqual(TIMESTAMP_UNSET);
  });
});