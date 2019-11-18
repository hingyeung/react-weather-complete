// (temperature: number) => { type: 'weather/SET_TEMPERATURE'; payload: number; }
import { createAction } from "typesafe-actions";

export const toggleShowLocationSelector = createAction('ui/TOGGLE_SHOW_LOCATION_SELECTOR', resolve => {
  return () => resolve();
});