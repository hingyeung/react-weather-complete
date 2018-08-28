import * as React from 'react';
import { Component } from 'react';
import ReactWeather from '../containers/ReactWeather';
import { IAppProps } from '../../types';
import LocationService from "../../services/LocationService";

class App extends Component<IAppProps> {

  componentDidMount() {
    const locationService = new LocationService();
    locationService.getLocation()
      .then(
        (location) => {
          this.props.updateCurrentLocation(location);
        }
      );
  };


  render() {
    return (
      <ReactWeather/>
    );
  }
}

export default App;
