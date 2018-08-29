import * as React from 'react';
import { ITemperatureProps, TemperatureUnit } from '../../types';
import styled from 'styled-components';

const TemperatureSC = styled.div`
  flex-basis: 30%;
  font-size: 72px;
`;

const UnitSC = styled.span`
  font-size: 32px;
`;

const Temperature: React.SFC<ITemperatureProps> = (props) => {
  const temperatureForUnit = (unit: TemperatureUnit, value: number) => {
    return unit === TemperatureUnit.C ? value : value * 9 / 5 + 32;
  };

  const roundToOneDecimalPlace = (value: number) => Math.round(value * 10)/10;

  return (
    <TemperatureSC>
      {roundToOneDecimalPlace(temperatureForUnit(props.temperatureUnit, props.temperature))}
      <UnitSC onClick={props.onToggleUnit}>
        &#176;{props.temperatureUnit}
      </UnitSC>
    </TemperatureSC>
  )
};

export default Temperature;