import React, { SFC } from 'react';
import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line'

interface TemperatureDatum {
  x: number
  y: number
  [key: string]: any
}

const Container = styled.div`
  // display: flex;
  overflow-x: auto;
  overflow-y: hidden;
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

const ChartContainer = styled.div`
  width: 1200px;
  height: 100px;
  // background-color: lightgray;
`;

const TemperatureTooltip = styled.span`
  font-size: x-small;
`;

export interface ForecastStripProps {
  hourlyTemperatureForecastData: TemperatureDatum[]
}

// const toHour = (utcSecond: number) => {
//   const date = new Date(utcSecond * 1000)
//   return date.getHours();
// }

const ForecastStrip: SFC<ForecastStripProps> = (props: ForecastStripProps) => {
  const maxTemp = Math.max(...props.hourlyTemperatureForecastData.map(item => item ? item.y : 0));
  return (
    <Container>
      {props.hourlyTemperatureForecastData && props.hourlyTemperatureForecastData.length > 0 &&
      <ChartContainer>
        <ResponsiveLine
          data={[{
            id: 'temperature forecast',
            data: props.hourlyTemperatureForecastData
          }]}
          curve='natural'
          enableGridY={false}

          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: maxTemp * 1.2, stacked: true, reverse: false }}
          colors={{ scheme: 'nivo' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          tooltip={(props) => (
            <TemperatureTooltip>
                {props.point.data.y}
            </TemperatureTooltip>
        )}
        />
      </ChartContainer>}
    </Container>
  );
}

export default ForecastStrip;