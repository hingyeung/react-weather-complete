import * as React from 'react';
import { Component } from 'react';
import Temperature from '../containers/Temperature';
import { IReactWeatherProps } from '../../types';
import Summary from '../containers/Summary';
import Location from '../../services/Location';
import LastUpdated from "../containers/LastUpdated";
import styled from 'styled-components';
import LocationDisplay from "./LocationDisplay";
import '../../styles/html5reset-1.6.1.css';
import WeatherIcon from '../containers/WeatherIcon';

const RWContainer = styled.div`
  border: red solid 1px;
  font-family: Arial, Helvetica, sans-serif;
  height: 280px;
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 20px;
`;

const Row1 = styled.div`
  display: flex;
  flex-basis: 60%;
  align-items: center;
`;

const Row2 = styled.div`
  display: flex;
  flex-basis: 30%;
  align-items: flex-start;
  margin-top: 20px;
`;

const Column = styled.div`
  flex-basis: 70%;
`;

class ReactWeather extends Component<IReactWeatherProps> {
  constructor(props: IReactWeatherProps) {
    super(props);
  }

  render() {
    if (this.props.location !== Location.UNSET) {
      this.props.loadWeatherData(this.props.location);
    }
    return (
      <RWContainer>
        <Row1>
          <Column>
            <LocationDisplay />
            <LastUpdated/>
          </Column>
          <Temperature/>
        </Row1>
        <Row2>
          <Summary/>
          <WeatherIcon/>
        </Row2>
      </RWContainer>
    )
  }
}

export default ReactWeather