import setTemperature from "./SetTemperature";
import darkSkyService from '../services/darksky'

export default (lat: number, lon: number) => (dispatch: any) => {
    darkSkyService(lat, lon)
        .then((resp: any) => {
            dispatch(
                setTemperature(parseFloat(resp.data.currently.temperature))
            )
        })
        .catch((error: any) => console.log(error));
}