import * as React from 'react';
import { Component } from 'react';
import LocationService from '../../services/LocationService';
import Location from '../../services/Location'

export interface Props {
  temperature: number | undefined;
  loadWeatherData: (lat: number, lon: number) => void;
}

class ReactWeather extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const locationService = new LocationService();
    locationService.getLocation().then(
      (location: Location) => {
        this.props.loadWeatherData(location.lat, location.lon);
      });

  }

  render() {
    console.log(this.props.temperature);
    const tempStr = this.props.temperature ? this.props.temperature : '';
    return (
      <div id="main">React Weather: {tempStr}</div>
    )
  }
}

export default ReactWeather