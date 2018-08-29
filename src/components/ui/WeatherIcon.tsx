import * as React from 'react';
import styled from 'styled-components';
import { IWeatherIconProps } from '../../types';

const WeatherIconSC = styled.div`
  flex-basis: 30%;
`;

const IconImg = styled.img`
  width: 100px;
  height: 100px;
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