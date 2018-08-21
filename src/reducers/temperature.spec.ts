import reducerToBeTested from './temperature'
import { SET_TEMPERATURE } from '../constants';

describe('Temperator reducer', () => {
  it('should set temperature', () => {
    const newState = reducerToBeTested(100, {type: SET_TEMPERATURE, payload: 10});
    expect(newState).toEqual(10);
  });
});