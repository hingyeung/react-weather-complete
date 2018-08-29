import * as React from 'react';
import { ITemperatureProps, TEMPERATURE_UNSET, TemperatureUnit } from '../../types';
import styled from 'styled-components';

const TemperatureSC = styled.div`
  flex-basis: 30%;
`;

const UnitSC = styled.span`
  font-size: 32px;
  cursor: pointer;
`;

const Temperature: React.SFC<ITemperatureProps> = (props) => {
  const temperatureForUnit = (unit: TemperatureUnit, value: number) => {
    return unit === TemperatureUnit.C ? value : value * 9 / 5 + 32;
  };

  const roundToOneDecimalPlace = (value: number) => Math.round(value * 10)/10;

  let temperatureElement = <TemperatureSC/>;
  if (props.temperature !== TEMPERATURE_UNSET) {
    temperatureElement = <TemperatureSC>
      {roundToOneDecimalPlace(temperatureForUnit(props.temperatureUnit, props.temperature))}&#176;
      <UnitSC onClick={props.onToggleUnit}>
        {props.temperatureUnit}
      </UnitSC>
    </TemperatureSC>;
  }

  return temperatureElement;
};

export default Temperature;