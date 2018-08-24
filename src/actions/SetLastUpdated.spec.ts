import {ActionType} from "../types";
import actionToBeTested from './SetLastUpdated'

describe('SetLastUpdated action', () => {
    it('should return proper action object', () => {
        expect(actionToBeTested(100)).toEqual({type: ActionType.SET_LAST_UPDATED, payload: 100});
    });
});