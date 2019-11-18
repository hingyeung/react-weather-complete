import { setTemperature, setTemperatureUnitToF, setTemperatureUnitToC } from './WeatherActions';
import { TemperatureUnit } from '../types';

describe('WeatherActions', () => {
  it('should build setTemperature action object', () => {
    expect(setTemperature(100)).toEqual({
      type: 'weather/SET_TEMPERATURE', payload: 100
    });
  });

  it('should return setTemperatureUnit action object with temperature unit F', () => {
    expect(setTemperatureUnitToF()).toEqual({
      type: 'weather/SET_TEMPERATURE_UNIT_TO_F', payload: TemperatureUnit.F
    });
  });

  it('should return setTemperatureUnit action object with temperature unit C', () => {
    expect(setTemperatureUnitToC()).toEqual({
      type: 'weather/SET_TEMPERATURE_UNIT_TO_C', payload: TemperatureUnit.C
    });
  });
});