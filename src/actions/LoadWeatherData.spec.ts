import actionToBeTested from './LoadWeatherData';
import setTemperature from "./SetTemperature";
jest.mock('./SetTemperature');
jest.mock('../services/darksky', () => ({
  default: jest.fn().mockImplementation(() =>
    Promise.resolve({
      data: require('../test/data/weather_data.json')
    }))
}));

describe('LoadWeatherData action', () => {
  let dispatch: any;

  beforeEach(() => {
    dispatch = jest.fn().mockName('dispatch');
  });

  it('should load weather data using Dark Sky API', async() => {
    // https://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest
    // darkSkyService.default = () => Promise.resolve({data: MOCK_DATA});
    await actionToBeTested()(dispatch);

    expect(setTemperature).toHaveBeenCalledWith(57.52);
  });
});
