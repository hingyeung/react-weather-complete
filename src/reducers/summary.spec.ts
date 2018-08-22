import { ActionType } from '../types';
import reducerToBeTested from './summary'

describe('Summary reducer', () => {
  it('should set summary', () => {
    const newSummary = 'new summary';
    const newState = reducerToBeTested('old summary', {type: ActionType.SET_SUMMARY, payload: newSummary});
    expect(newState).toEqual(newSummary);
  });
});