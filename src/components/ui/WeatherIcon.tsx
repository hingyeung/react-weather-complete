import * as React from 'react';
import styled from 'styled-components';
import { IWeatherIconProps } from '../../types';

const WeatherIconSC = styled.div`
  flex-basis: 30%;
  height: 1.7em;
  flex-basis: 140px;
`;

const IconImg = styled.img`
  height: 100%;
`;

const WeatherIcon: React.SFC<IWeatherIconProps> = (props: IWeatherIconProps) => {
  let iconImg;
  if (props.icon) {
    iconImg = <IconImg src={`https://darksky.net/images/weather-icons/${props.icon}.png`}/>;
  }
  return (
    <WeatherIconSC>
      {iconImg}
    </WeatherIconSC>
  );
};

export default WeatherIcon;