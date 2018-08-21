import setTemperature from "./SetTemperature";
import darkSkyService from '../services/darksky'

export default () => (dispatch: any) => {
    return darkSkyService(-37.8136, 144.9631)
        .then((resp: any) => {
            dispatch(
                setTemperature(parseFloat(resp.data.currently.temperature))
            )
        })
        .catch((error: any) => console.log(error));
}