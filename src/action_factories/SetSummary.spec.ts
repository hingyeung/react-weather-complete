import actionToBeTested from './SetSummary'
import { ActionType } from '../types';

describe('SetSummary action', () => {
  it('should return proper action object', () => {
    const action = actionToBeTested('new summary');
    expect(action).toEqual({
      type: ActionType.SET_SUMMARY,
      payload: 'new summary'
    })
  })
});