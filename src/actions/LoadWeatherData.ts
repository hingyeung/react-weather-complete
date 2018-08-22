import setTemperature from "./SetTemperature";
import setSummary from "./SetSummary";
import darkSkyService from '../services/darksky'
import { Dispatch } from 'redux';

export default (lat: number, lon: number) => (dispatch: Dispatch) => {
  darkSkyService(lat, lon)
    .then((resp: any) => {
      dispatch(
        setTemperature(parseFloat(resp.data.currently.temperature))
      );
      dispatch(
        setSummary(resp.data.currently.summary)
      );
    })
    .catch((error: any) => console.log(error));
}