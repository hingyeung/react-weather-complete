import temperatureUnitReducers from './TemperatureUnitReducers';
import { TemperatureUnit } from '../types';
import {
  setSummary,
  setTemperatureUnitToC,
  setTemperatureUnitToF,
  toggleTemperatureUnit
} from '../actions/WeatherActions';

describe('TemperatureUnitReducers', () => {
  it('should toggle temperature unit', () => {
    expect(temperatureUnitReducers(TemperatureUnit.C, toggleTemperatureUnit())).toEqual(TemperatureUnit.F);
    expect(temperatureUnitReducers(TemperatureUnit.F, toggleTemperatureUnit())).toEqual(TemperatureUnit.C);
  });

  it('should set temperature unit to C', () => {
    expect(temperatureUnitReducers(TemperatureUnit.C, setTemperatureUnitToC())).toEqual(TemperatureUnit.C);
    expect(temperatureUnitReducers(TemperatureUnit.F, setTemperatureUnitToC())).toEqual(TemperatureUnit.C);
  });

  it('should set temperature unit to F', () => {
    expect(temperatureUnitReducers(TemperatureUnit.C, setTemperatureUnitToF())).toEqual(TemperatureUnit.F);
    expect(temperatureUnitReducers(TemperatureUnit.F, setTemperatureUnitToF())).toEqual(TemperatureUnit.F);
  });

  it('should set default temperature unit to C', () => {
    // wrong action setSummary()
    expect(temperatureUnitReducers(undefined, setSummary('summary'))).toEqual(TemperatureUnit.C);
  });
});