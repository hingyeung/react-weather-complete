import { createAction } from 'typesafe-actions';
import Location from '../services/Location';

export const setLocation = createAction('location/SET_LOCATION',resolve => {
  return (location: Location) => resolve(location);
});