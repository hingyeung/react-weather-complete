import { Dispatch } from 'redux';
import Location from '../services/Location';
import GeocodeService from '../services/GeocodeService';

const TEST_LOC = new Location(1,2, 'wherever');
const locationActions = require('./LocationActions');
const weatherActions = require('./WeatherActions');

jest.mock('../services/GeocodeService');
// https://github.com/kulshekhar/ts-jest/issues/661#issuecomment-410532310
// @ts-ignore
GeocodeService.mockImplementation(() => ({
  reverseGeocode: jest.fn().mockImplementation(() => {
    const geocoderResult = [{
      address_components: [{
        types: ['locality'],
        long_name: 'locality_long_name'
      }]}
    ];

    return Promise.resolve(geocoderResult);
  })
}));

describe('SetLocationWithThunk action', () => {
  let dispatch: Dispatch;

  beforeAll(() => {
    locationActions.setLocation  = jest.fn();
    locationActions.setLocationDisplay = jest.fn();
    weatherActions.loadWeatherDataWithThunk = jest.fn().mockImplementation(() => (dispatch: Dispatch) => {});
  });

  beforeEach(() => {
    dispatch = jest.fn().mockName('dispatch');
  });

  it('should set location', async () => {
    await locationActions.setLocationWithThunk(TEST_LOC)(dispatch);
    expect(locationActions.setLocation).toHaveBeenCalledWith(TEST_LOC);
  });

  it('should load weather data', async () => {
    await locationActions.setLocationWithThunk(TEST_LOC)(dispatch);
    expect(weatherActions.loadWeatherDataWithThunk).toHaveBeenCalledWith(TEST_LOC);
  });

  it('should set location display', async () => {
    await locationActions.setLocationWithThunk(TEST_LOC)(dispatch);
    expect(locationActions.setLocationDisplay).toHaveBeenCalledWith('locality_long_name');
  });
});