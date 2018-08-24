import * as React from 'react';
import { Component } from 'react';
import ReactWeather from '../containers/ReactWeather';
import LocationService from '../../services/LocationService';
import { IAppProps } from '../../types';

class App extends Component<IAppProps> {

  componentDidMount() {
    const locationService = new LocationService();
    locationService.getLocation()
      .then(
        (location) => {
          console.log('settting location');
          this.props.updateCurrentLocation(location);
        }
      )
  };


  render() {
    return (
      <ReactWeather/>
    );
  }
}

export default App;