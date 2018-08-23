import { connect } from 'react-redux';
import Temperature from '../ui/Temperature';
import { AppState } from '../../types';
import { Dispatch } from 'redux';
// import { loadWeatherData } from "../../actions";

const mapStateToProps = (state: AppState) => {
  return {
    temperature: state.temperature,
    temperatureUnit: state.temperatureUnit
  }
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onToggleUnit: () => {
    // dispatch(loadWeatherData(ownProps.location.lat, ownProps.location.lon));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Temperature);