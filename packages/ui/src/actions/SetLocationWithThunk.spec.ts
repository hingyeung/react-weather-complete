import { Dispatch } from 'redux';
import Location from '../services/Location';
import GeocodeService from '../services/GeocodeService';

const TEST_LOC = new Location(1,2, 'wherever');
import * as locationActions from './LocationActions';
import * as weatherActions from './WeatherActions';

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
    locationActions.lib.setLocation  = jest.fn();
    locationActions.lib.setLocationDisplay = jest.fn();
    weatherActions.lib.loadWeatherDataWithThunk = jest.fn().mockImplementation(() => (dispatch: Dispatch) => {});
  });

  beforeEach(() => {
    dispatch = jest.fn().mockName('dispatch');
  });

  it('should set location', async () => {
    await locationActions.setLocationWithThunk(TEST_LOC)(dispatch);
    expect(locationActions.lib.setLocation).toHaveBeenCalledWith(TEST_LOC);
  });

  it('should load weather data', async () => {
    await locationActions.setLocationWithThunk(TEST_LOC)(dispatch);
    expect(weatherActions.lib.loadWeatherDataWithThunk).toHaveBeenCalledWith(TEST_LOC);
  });

  it('should set location display', async () => {
    await locationActions.setLocationWithThunk(TEST_LOC)(dispatch);
    expect(locationActions.lib.setLocationDisplay).toHaveBeenCalledWith('locality_long_name');
  });
});