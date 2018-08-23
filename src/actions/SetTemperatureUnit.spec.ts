import actionToBeTested from './SetTemperatureUnit'
import { ActionType, TemperatureUnit } from '../types';

describe('SetTemperatureUnit action', () => {
  it('should return proper action object with temperature unit F', () => {
    const action = actionToBeTested(TemperatureUnit.F);
    expect(action).toEqual({type: ActionType.SET_TEMPERATURE_UNIT, payload: TemperatureUnit.F});
  });

  it('should return proper action object with temperature unit C', () => {
    const action = actionToBeTested(TemperatureUnit.C);
    expect(action).toEqual({type: ActionType.SET_TEMPERATURE_UNIT, payload: TemperatureUnit.C});
  });
});