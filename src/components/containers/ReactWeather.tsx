import ReactWeather from "../ui/ReactWeather";
import {AppState} from "../../types";
import {connect} from 'react-redux';
import {loadWeatherData} from "../../actions";


const mapStateToProps = (state: AppState, props: any) => ({
    temperature: state.temperature
});
const mapDispatchToProps = (dispatch: any) => ({
    loadWeatherData: (lat: number, lon: number) => {
        dispatch(loadWeatherData(lat, lon));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactWeather)


