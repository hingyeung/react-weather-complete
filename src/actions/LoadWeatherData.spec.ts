import actionToBeTested from './LoadWeatherData';
import setTemperature from "../action_factories/SetTemperature";
import setTemperatureUnit from "../action_factories/SetTemperatureUnit";
import setSummary from '../action_factories/SetSummary';
import { Dispatch } from 'redux';
import { TemperatureUnit, Units } from '../types';

jest.mock('../action_factories/SetTemperature');
jest.mock('../action_factories/SetTemperatureUnit');
jest.mock('../action_factories/SetSummary');
jest.mock('../services/darksky', () => ({
  default: jest.fn().mockImplementation((lat, lon, units) => {
    expect(lat).toEqual(1);
    expect(lon).toEqual(2);
    return Promise.resolve({
      data: require('../test/data/weather_data_small.json')
    })
  })
}));

describe('LoadWeatherData action', () => {
  let dispatch: Dispatch;

  beforeEach(() => {
    dispatch = jest.fn().mockName('dispatch');
  });

  it('should set temperature', async () => {
    // darkSkyService.default = () => Promise.resolve({data: MOCK_DATA});
    await actionToBeTested(1, 2)(dispatch);

    expect(setTemperature).toHaveBeenCalledWith(15);
  });

  it('should set default temperature unit', async () => {
    await actionToBeTested(1, 2)(dispatch);

    expect(setTemperatureUnit).toHaveBeenCalledWith(TemperatureUnit.C)
  });

  it('should set temperature unit for US', async () => {
    await actionToBeTested(1, 2, Units.US)(dispatch);

    expect(setTemperatureUnit).toHaveBeenCalledWith(TemperatureUnit.F)
  });

  it('should set temperature unit for SI', async () => {
    await actionToBeTested(1, 2, Units.SI)(dispatch);

    expect(setTemperatureUnit).toHaveBeenCalledWith(TemperatureUnit.C)
  });

  it('should set summary text', async () => {
    await actionToBeTested(1, 2)(dispatch);
    expect(setSummary).toHaveBeenCalledWith('this is summary');
  });
});
