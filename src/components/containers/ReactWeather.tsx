import ReactWeather from "../ui/ReactWeather";
import {connect} from 'react-redux';
import {loadWeatherData} from "../../actions";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../types';

// ThunkDispatch type is used because Thunk is used for async action "loadWeatherData"
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => ({
    loadWeatherData: (lat: number, lon: number) => {
        dispatch(loadWeatherData(lat, lon));
    }
});

export default connect(null, mapDispatchToProps)(ReactWeather)
