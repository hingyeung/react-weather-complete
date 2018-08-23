import reducerToBeTested from './temperatureUnit';
import { ActionType, TemperatureUnit } from '../types';

describe('Temperature Unit reducer', () => {
  it('should set temperature unit to F', () => {
    const newState = reducerToBeTested(TemperatureUnit.C, {type: ActionType.SET_TEMPERATURE_UNIT, payload: TemperatureUnit.F});
    expect(newState).toEqual(TemperatureUnit.F);
  });

  it('should set temperature unit to C', () => {
    const newState = reducerToBeTested(TemperatureUnit.F, {type: ActionType.SET_TEMPERATURE_UNIT, payload: TemperatureUnit.C});
    expect(newState).toEqual(TemperatureUnit.C);
  });
});