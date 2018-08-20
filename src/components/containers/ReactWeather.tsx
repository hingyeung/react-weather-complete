import ReactWeather from "../ui/ReactWeather";
import {AppState} from "../../types";
import {connect} from 'react-redux';
// import {setTemperature} from "../../actions";
// import darkSkyService from '../../services/darksky'
import {loadWeatherData} from "../../actions";


const mapStateToProps = (state: AppState, props: any) => ({
    temperature: state.temperature
});
const mapDispatchToProps = (dispatch: any) => ({
    loadWeatherData: () => {
        // darkSkyService(-37.8136, 144.9631)
        //     .then((resp: any) => {
        //         dispatch(
        //             setTemperature(parseFloat(resp.data.currently.temperature))
        //         );
        //     });
        dispatch(loadWeatherData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactWeather)


