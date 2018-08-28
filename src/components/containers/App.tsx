import { connect } from 'react-redux';
import App from '../ui/App';
import { Dispatch } from 'redux';
// import {setLocation} from '../../actions'
import Location from '../../services/Location';
import { setLocation } from '../../actions/LocationActions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCurrentLocation: (location: Location) => {
    // dispatch(setLocation(location))
    dispatch(setLocation(location));
  }
});

export default connect(null, mapDispatchToProps)(App)