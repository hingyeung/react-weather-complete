import { Dispatch } from 'redux';
import { Units } from '../types';
import Location from '../services/Location';
jest.unmock('./WeatherActions');
// const weatherActions = require('./WeatherActions');
import * as weatherActions from './WeatherActions';
// weatherActions.lib.setSummary = jest.fn();
// weatherActions.lib.setLastUpdated = jest.fn();
weatherActions.lib.setTemperature = jest.fn();
// weatherActions.lib.setApparentTemperature = jest.fn();
weatherActions.lib.setTemperatureUnitToC = jest.fn();
weatherActions.lib.setTemperatureUnitToF = jest.fn();
weatherActions.lib.setCurrently = jest.fn();
// weatherActions.lib.setIcon = jest.fn();
const returnedWeatherData = require('../test/data/weather_data_small.json')

jest.mock('../services/darksky', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((lat, lon, units) => {
    expect(lat).toEqual(1);
    expect(lon).toEqual(2);
    return Promise.resolve({
      data: require('../test/data/weather_data_small.json')
    })
  })
}));

const TEST_LOC = new Location(1,2, 'wherever');

describe('LoadWeatherData action', () => {
  let dispatch: Dispatch;

  beforeEach(() => {
    dispatch = jest.fn().mockName('dispatch');
  });

  // it('should set temperature', async () => {
  //   // darkSkyService.default = () => Promise.resolve({data: MOCK_DATA});
  //   await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);

  //   expect(weatherActions.lib.setTemperature).toHaveBeenCalledWith(15);
  // });

  // it('should set apparent temperature', async () => {
  //   await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);

  //   expect(weatherActions.lib.setApparentTemperature).toHaveBeenCalledWith(10);
  // });

  it('should set default temperature unit', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);

    expect(weatherActions.lib.setTemperatureUnitToC).toHaveBeenCalledWith()
  });

  it('should set temperature unit for US', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC, Units.US)(dispatch);

    expect(weatherActions.lib.setTemperatureUnitToF).toHaveBeenCalledWith()
  });

  it('should set temperature unit for SI', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC, Units.SI)(dispatch);

    expect(weatherActions.lib.setTemperatureUnitToC).toHaveBeenCalledWith()
  });

  it('should set currently', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);
    expect(weatherActions.lib.setCurrently).toHaveBeenCalledWith(returnedWeatherData.currently);
  });

  // it('should set icon', async () => {
  //   await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);
  //   expect(weatherActions.lib.setIcon).toHaveBeenCalledWith('icon');
  // });
});
