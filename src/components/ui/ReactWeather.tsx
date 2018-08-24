import * as React from 'react';
import { Component } from 'react';
import Temperature from '../containers/Temperature';
import { IReactWeatherProps } from '../../types';
import Summary from '../containers/Summary';
import Location from '../../services/Location';
import LastUpdated from "../containers/LastUpdated";

class ReactWeather extends Component<IReactWeatherProps> {
  constructor(props: IReactWeatherProps) {
    super(props);
  }

  render() {
    if (this.props.location !== Location.UNSET) {
      this.props.loadWeatherData(this.props.location);
    }
    return (
      <div className="react-weather-main">
        {this.props.location.lat}
        {this.props.location.lon}
        <Temperature/>
        <LastUpdated/>
        <Summary/>
      </div>
    )
  }
}

export default ReactWeather