import * as React from 'react';
import { ITemperatureProps } from '../../types';

export default (props: ITemperatureProps) => {
  return (
    <div>Temperature: {props.temperature}<span className="temperature-unit">{props.temperatureUnit}</span></div>
  )
}