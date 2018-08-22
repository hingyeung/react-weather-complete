import { ActionCreator } from 'redux';
import { ActionType, SetSummaryAction } from '../types';

const action: ActionCreator<SetSummaryAction> = (summary: string) => ({
  type: ActionType.SET_SUMMARY,
  payload: summary
});

export default action;