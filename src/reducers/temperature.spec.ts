import reducerToBeTested from './temperature'
import { ActionType } from '../types';

describe('Temperature reducer', () => {
  it('should set temperature', () => {
    const newState = reducerToBeTested(100, {type: ActionType.SET_TEMPERATURE, payload: 10});
    expect(newState).toEqual(10);
  });
});