import { AppState, IWeatherInfo } from '../../types';
import ForecastPanel from '../ui/ForecastPanel';
import { connect } from 'react-redux';

const getTemperatureForecastData = (hourlyForecasts: IWeatherInfo[]) => {
  const temperatureForecastData = hourlyForecasts.map((weatherInfo: IWeatherInfo, idx: number) => {
    return {x: idx, y: weatherInfo.temperature};
  });
  return temperatureForecastData;
}

const mapStateToProps = (state: AppState) => ({
  hourlyTemperatureForecastData: getTemperatureForecastData(state.hourlyForecasts)
});

export default connect(mapStateToProps)(ForecastPanel);