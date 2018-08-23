import { ActionType, SetTemperatureUnitAction, TemperatureUnit } from '../types';

export default (state: TemperatureUnit = TemperatureUnit.C, action: SetTemperatureUnitAction) => {
  switch (action.type) {
    case ActionType.SET_TEMPERATURE_UNIT:
      return action.payload;
    default:
      return state;
  }
};