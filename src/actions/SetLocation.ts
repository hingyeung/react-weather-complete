import { ActionCreator } from 'redux';
import { ActionType, SetLocationAction } from '../types';
import Location from '../services/Location'

const action: ActionCreator<SetLocationAction> = (location: Location) => {
  return {
    type: ActionType.SET_LOCATION,
    payload: location
  }
};

export default action;