import * as React from 'react';
import { ITemperatureProps, TemperatureUnit } from '../../types';

const Temperature: React.SFC<ITemperatureProps> = (props) => {
  const temperatureForUnit = (unit: TemperatureUnit, value: number) => {
    return unit === TemperatureUnit.C ? value : value * 9 / 5 + 32;
  };

  return (
    <div className="temperature">
      Temperature: {temperatureForUnit(props.temperatureUnit, props.temperature)}
      <span onClick={props.onToggleUnit} className="temperature-unit">
        {props.temperatureUnit}
      </span>
    </div>
  )
};

export default Temperature;