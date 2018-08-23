import { ActionCreator } from 'redux';
import { ActionType, SetTemperatureUnitAction, TemperatureUnit } from '../types';

const action: ActionCreator<SetTemperatureUnitAction> = (temperatureUnit: TemperatureUnit) => {
  return {
    type: ActionType.SET_TEMPERATURE_UNIT,
    payload: temperatureUnit
  };
};

export default action;