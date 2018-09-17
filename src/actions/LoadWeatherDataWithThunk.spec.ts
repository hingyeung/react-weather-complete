import { Dispatch } from 'redux';
import { Units } from '../types';
import Location from '../services/Location';
jest.unmock('./WeatherActions');
const weatherActions = require('./WeatherActions');
weatherActions.setSummary = jest.fn();
weatherActions.setLastUpdated = jest.fn();
weatherActions.setTemperature = jest.fn();
weatherActions.setApparentTemperature = jest.fn();
weatherActions.setTemperatureUnitToC = jest.fn();
weatherActions.setTemperatureUnitToF = jest.fn();
weatherActions.setIcon = jest.fn();

jest.mock('../services/darksky', () => ({
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

  it('should set temperature', async () => {
    // darkSkyService.default = () => Promise.resolve({data: MOCK_DATA});
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);

    expect(weatherActions.setTemperature).toHaveBeenCalledWith(15);
  });

  it('should set apparent temperature', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);

    expect(weatherActions.setApparentTemperature).toHaveBeenCalledWith(10);
  });

  it('should set default temperature unit', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);

    expect(weatherActions.setTemperatureUnitToC).toHaveBeenCalled()
  });

  it('should set temperature unit for US', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC, Units.US)(dispatch);

    expect(weatherActions.setTemperatureUnitToF).toHaveBeenCalled()
  });

  it('should set temperature unit for SI', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC, Units.SI)(dispatch);

    expect(weatherActions.setTemperatureUnitToC).toHaveBeenCalled()
  });

  it('should set summary text', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);
    expect(weatherActions.setSummary).toHaveBeenCalledWith('this is hourly summary');
  });

  it('should set icon', async () => {
    await weatherActions.loadWeatherDataWithThunk(TEST_LOC)(dispatch);
    expect(weatherActions.setIcon).toHaveBeenCalledWith('icon');
  });
});
