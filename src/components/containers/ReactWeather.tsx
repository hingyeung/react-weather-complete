import ReactWeather from "../ui/ReactWeather";
import { connect } from 'react-redux';
import { loadWeatherDataWithThunk } from "../../actions/WeatherActions";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../types';
import Location from '../../services/Location';

// ThunkDispatch type is used because Thunk is used for async action "loadWeatherData"
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>, ownProps: any) => {
  return {
    loadWeatherData: (location: Location) => {
      // dispatch(loadWeatherData.request(location));
      dispatch(loadWeatherDataWithThunk(location))
    }
  }
};

const mapStateToProps = (state: AppState) => ({
  location: state.location,
  showLocationSelector: state.showLocationSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactWeather)
