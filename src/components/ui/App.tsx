import * as React from 'react';
import { Component } from 'react';
import ReactWeather from '../containers/ReactWeather';
import { IAppProps } from '../../types';
import LocationService from "../../services/LocationService";
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends Component<IAppProps> {

  componentDidMount() {
    const locationService = new LocationService();
    locationService.getLocation()
      .then(
        (location) => {
          this.props.updateCurrentLocation(location);
        }
      )
      .catch((error) => console.log(error));
  };


  render() {
    return (
      <AppWrapper>
        <ReactWeather/>
      </AppWrapper>
    );
  }
}

export default App;
