import {SET_TEMPERATURE} from "../constants";


export default (temperature: number) => {
    return {
        type: SET_TEMPERATURE,
        payload: temperature
    }
};