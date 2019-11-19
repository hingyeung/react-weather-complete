import * as React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Location from "../../services/Location";
import LocationService from "../../services/LocationService";

// jest.mock() makes module undefined when importing it no matter what we return in factory function
// https://github.com/kulshekhar/ts-jest/issues/120#issuecomment-321901971
const mockGetLocation = jest.fn().mockImplementation(() => Promise.resolve(new Location(1,2, 'wherever')));
jest.mock("../../services/LocationService");
// https://github.com/kulshekhar/ts-jest/issues/661#issuecomment-410532310
// @ts-ignore
LocationService.mockImplementation(() => ({
  getLocation: mockGetLocation
}));

describe('App component', () => {
  it('should call updateLocation prop function with lat/lon from props', (done) => {
    const updateCurrentLocation = jest.fn().mockImplementation((location) => {
      expect(updateCurrentLocation).toHaveBeenCalledWith(new Location(1, 2, 'wherever'));
      done();
    });
    shallow(<App updateCurrentLocation={updateCurrentLocation}/>);
  });
});
