import { connect } from 'react-redux';
import App from '../ui/App';
import { Dispatch } from 'redux';
import {setLocation} from '../../actions'
import Location from '../../services/Location';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCurrentLocation: (location: Location) => {
    dispatch(setLocation(location))
  }
});

export default connect(null, mapDispatchToProps)(App)