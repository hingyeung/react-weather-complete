import ReactWeather from "../ui/ReactWeather";
import { connect } from 'react-redux';
import { loadWeatherData } from "../../actions";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../types';
import Location from '../../services/Location';

// ThunkDispatch type is used because Thunk is used for async action "loadWeatherData"
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>, ownProps: any) => {
  return {
    loadWeatherData: (location: Location) => {
      dispatch(loadWeatherData(location.lat, location.lon));
    }
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    location: state.location
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactWeather)
