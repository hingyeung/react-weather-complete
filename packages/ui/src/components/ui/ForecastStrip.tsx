import React, { SFC } from 'react';
import styled from 'styled-components';
import { IWeatherInfo } from 'src/types';

const Container = styled.div`
  background-color: red;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  touch-action: pan-x;
  flex-shrink: 0;
`;

// const StripContainerSC = styled.div`
//   max-width: 350px;
//   overflow-x: auto;
//   white-space: nowrap;
//   border: 1px red solid;
//   display: flex;
// `;

const StripItemSC = styled.div`
  width: 100px;
  // flex-basis: 200px;
  height: 100px;
  background-color: lightgray;
  
  border: green solid 1px;
`;

export interface ForecastStripProps {
  hourlyForecasts: IWeatherInfo[]
}

const toHour = (utcSecond: number) => {
  const date = new Date(utcSecond * 1000)
  return date.getHours();
}

const ForecastStrip: SFC<ForecastStripProps> = (props: ForecastStripProps) => {
  const hourlyForecasts = props.hourlyForecasts.map((forecast, key) =>
    <StripItemSC key={key}>{toHour(forecast.time)}:00 => {forecast.temperature},</StripItemSC>
  );
  return (
    <Container>
      {/* <StripContainerSC> */}
        {hourlyForecasts}
      {/* </StripContainerSC> */}
    </Container>
  );
}

export default ForecastStrip;