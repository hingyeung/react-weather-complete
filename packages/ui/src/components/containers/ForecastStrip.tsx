import { AppState } from '../../types';
import ForecastStrip from '../ui/ForecastStrip';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
  hourlyForecasts: state.hourlyForecasts
});

export default connect(mapStateToProps)(ForecastStrip);