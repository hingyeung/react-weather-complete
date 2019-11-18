import * as React from 'react';
import styled from 'styled-components';
import { IWeatherIconProps } from '../../types';

const WeatherIconSC = styled.div`
  height: 1.7em;
`;

const IconImg = styled.img`
  height: 100%;
`;

const WeatherIcon: React.SFC<IWeatherIconProps> = (props: IWeatherIconProps) => {
  let iconImg;
  if (props.icon) {
    iconImg = <IconImg alt={props.icon} src={`https://darksky.net/images/weather-icons/${props.icon}.png`}/>;
  }
  return (
    <WeatherIconSC>
      {iconImg}
    </WeatherIconSC>
  );
};

export default WeatherIcon;