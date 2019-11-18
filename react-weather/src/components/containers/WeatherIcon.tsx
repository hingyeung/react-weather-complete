import { AppState } from '../../types';
import { connect } from 'react-redux';
import WeatherIcon from '../ui/WeatherIcon';

const mapStateToProps = (state: AppState) => ({
  icon: state.icon
});

export default connect(mapStateToProps)(WeatherIcon);