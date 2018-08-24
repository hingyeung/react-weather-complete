import * as React from 'react';
import { ITemperatureProps } from '../../types';

export default (props: ITemperatureProps) => {
  return (
    <div className="temperature">
      Temperature: {props.temperature}
      <span onClick={props.onToggleUnit} className="temperature-unit">
        {props.temperatureUnit}
      </span>
    </div>
  )
}