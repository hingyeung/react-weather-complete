import * as React from 'react';
import { Component } from 'react';
import Temperature from '../containers/Temperature';
import { IReactWeatherProps } from '../../types';
import Summary from '../containers/Summary';
import Location from '../../services/Location';
import LastUpdated from "../containers/LastUpdated";
import styled from 'styled-components';

const RWContainer = styled.div`
  border: red solid 1px;
  flex-basis: 30%;
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
        <Temperature/>
        <LastUpdated/>
        <Summary/>
      </RWContainer>
    )
  }
}

export default ReactWeather