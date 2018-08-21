// import actionToBeTested from './LoadWeatherData';
import { SET_TEMPERATURE } from '../constants';

describe('LoadWeatherData action', () => {
  jest.mock('../services/darksky');
  let actionToBeTested = require('./LoadWeatherData').default;
  let dispatch: any;

  beforeEach(() => {
    dispatch = jest.fn().mockName('dispatch');
  });

  it('should load weather data using Dark Sky API', async () => {
    await actionToBeTested()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_TEMPERATURE,
      payload: 57.52
    });
  });
});