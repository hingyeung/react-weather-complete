import { connect } from 'react-redux';
import Temperature from '../ui/Temperature';
import { AppState } from '../../types';
import { Dispatch } from 'redux';
import {toggleTemperatureUnit} from '../../actions/WeatherActions'

const mapStateToProps = (state: AppState) => {
  return {
    temperature: state.temperature,
    apparentTemperature: state.apparentTemperature,
    temperatureUnit: state.temperatureUnit
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onToggleUnit: () => {
    dispatch(toggleTemperatureUnit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);