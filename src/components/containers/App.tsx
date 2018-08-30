import { connect } from 'react-redux';
import App from '../ui/App';
import { AnyAction } from 'redux';
import Location from '../../services/Location';
import { setLocationWithThunk } from '../../actions/LocationActions';
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../types";

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => ({
  updateCurrentLocation: (location: Location) => {
    dispatch(setLocationWithThunk(location));
  }
});

export default connect(null, mapDispatchToProps)(App)