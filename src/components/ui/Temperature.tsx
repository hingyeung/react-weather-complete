import * as React from 'react';
import { ITemperatureProps } from '../../types';

const Temperature: React.SFC<ITemperatureProps> = (props) => {
  return (
    <div className="temperature">
      Temperature: {props.temperature}
      <span onClick={props.onToggleUnit} className="temperature-unit">
        {props.temperatureUnit}
      </span>
    </div>
  )
};

export default Temperature;