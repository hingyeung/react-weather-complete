import * as React from 'react';
import { ITemperatureProps } from '../../types';

export default (props: ITemperatureProps) => {
  return (
    <div>Temperature: {props.temperature}</div>
  )
}