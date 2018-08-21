import actionToBeTested from './SetTemperature'
import { SET_TEMPERATURE } from '../constants';

describe('SetTemperature action', () => {
  it('should return proper action object', () => {
    const action = actionToBeTested(100);
    expect(action).toEqual({type: SET_TEMPERATURE, payload: 100});
  })
});