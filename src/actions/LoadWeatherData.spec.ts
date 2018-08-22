import actionToBeTested from './LoadWeatherData';
import setTemperature from "./SetTemperature";
import setSummary from './SetSummary';
import { Dispatch } from 'redux';

jest.mock('./SetTemperature');
jest.mock('./SetSummary');
jest.mock('../services/darksky', () => ({
  default: jest.fn().mockImplementation((lat, lon) => {
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

  it('should set summary text', async () => {
    await actionToBeTested(1, 2)(dispatch);
    expect(setSummary).toHaveBeenCalledWith('this is summary');
  });
});
