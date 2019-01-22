import * as React from 'react';
import { ITemperatureProps, TEMPERATURE_UNSET, TemperatureUnit } from '../../types';
import styled from 'styled-components';

const TemperatureSC = styled.div`
`;

const ApparentTemperatureSC = styled.div`
  font-size: 33%;
  filter: opacity(50%);
`;

const UnitSC = styled.span`
  font-size: 50%;
  cursor: pointer;
  color: steelblue;
  border-bottom: 1px solid steelblue;
`;

const Temperature: React.SFC<ITemperatureProps> = (props) => {
  const temperatureForUnit = (unit: TemperatureUnit, value: number) => {
    return unit === TemperatureUnit.C ? value : value * 9 / 5 + 32;
  };

  const roundToOneDecimalPlace = (value: number) => Math.round(value * 10)/10;

  let temperatureElement = <TemperatureSC/>;
  if (props.temperature !== TEMPERATURE_UNSET) {
    temperatureElement =
      <div>
        <TemperatureSC>
          {roundToOneDecimalPlace(temperatureForUnit(props.temperatureUnit, props.temperature))}&#176;
          <UnitSC onClick={props.onToggleUnit}>
            {props.temperatureUnit}
          </UnitSC>
        </TemperatureSC>
        <ApparentTemperatureSC>
          feels like {roundToOneDecimalPlace(temperatureForUnit(props.temperatureUnit, props.apparentTemperature))}&#176;
        </ApparentTemperatureSC>
      </div>;
  }

  return temperatureElement;
};

export default Temperature;