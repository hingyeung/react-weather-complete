import * as React from 'react';
import { Component } from 'react';
import ReactWeather from '../containers/ReactWeather';
// import LocationService from '../../services/LocationService';
import { IAppProps } from '../../types';
import Location from '../../services/Location';

class App extends Component<IAppProps> {

  componentDidMount() {
    // const locationService = new LocationService();
    // locationService.getLocation()
    //   .then(
    //     (location) => {
    //       console.log('settting location', location);
    //       this.props.updateCurrentLocation(location);
    //     }
    //   );
    // TODO: get real location
    this.props.updateCurrentLocation(new Location(-37.8860157,145.1560765));
  };


  render() {
    return (
      <ReactWeather/>
    );
  }
}

export default App;
