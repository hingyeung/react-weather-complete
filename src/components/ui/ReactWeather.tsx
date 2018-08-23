import * as React from 'react';
import { Component } from 'react';
// import LocationService from '../../services/LocationService';
import Temperature from '../containers/Temperature';
import { IReactWeatherProps } from '../../types';
import Summary from '../containers/Summary';
import Location from '../../services/Location';

class ReactWeather extends Component<IReactWeatherProps> {
  constructor(props: IReactWeatherProps) {
    super(props);
  }

  render() {
    if (this.props.location !== Location.UNSET) { this.props.loadWeatherData(this.props.location); }
    return (
      <div>
        {this.props.location.lat}
        {this.props.location.lon}
        <Temperature/>
        <Summary/>
      </div>
    )
  }
}

export default ReactWeather