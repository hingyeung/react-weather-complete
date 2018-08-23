import actionToBeTested from './SetTemperature'
import { ActionType } from '../types';

describe('SetTemperature action', () => {
  it('should return proper action object', () => {
    const action = actionToBeTested(100);
    expect(action).toEqual({type: ActionType.SET_TEMPERATURE, payload: 100});
  })
});