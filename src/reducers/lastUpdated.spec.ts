import lastUpdated from "./lastUpdated";
import { setLastUpdated } from '../actions'

describe('LastUpdated reducer', () => {
  it('should return timestamp', () => {
    expect(lastUpdated(0, setLastUpdated(100))).toEqual(100);
  });
});