import setTemperature from "./SetTemperature";
import darkSkyService from '../services/darksky'
import { Dispatch } from 'redux';

export default (lat: number, lon: number) => (dispatch: Dispatch) => {
    darkSkyService(lat, lon)
        .then((resp: any) => {
            dispatch(
                setTemperature(parseFloat(resp.data.currently.temperature))
            )
        })
        .catch((error: any) => console.log(error));
}