// https://jsramblings.com/2018/01/15/3-ways-to-test-mapStateToProps-and-mapDispatchToProps.html
import * as React from "react";
import LocationSelector from './LocationSelector';
import {DEFAULT_POSITION} from './LocationSelector';
import {
  shallow
} from 'enzyme';

// Create the mock store
import configureMockStore from 'redux-mock-store';

// need mock store to test mapStateToProps()
const mockStore = configureMockStore();

describe('LocationSelector', () => {
  const shallowComponentWithLocation = (location?: any) => {
    const initialState = location ? { location: location } : {};
    const store = mockStore(initialState);
    // Shallow render the container passing in the mock store
    return shallow(
        <LocationSelector store={store}/>
    );
  }

  it('should use DEFAULT_POSITION if location in state is not defined', () => {
    expect(shallowComponentWithLocation().props().defaultPosition).toEqual(DEFAULT_POSITION);
  });

  it('should use provided location in state when location in state is defined', () => {
    const myLocation = {lat: 1, lon: 2};
    const expectedLocation = {lat: 1, lng: 2};  // lon vs lng. It smells.
    expect(shallowComponentWithLocation(myLocation).props().defaultPosition).toEqual(expectedLocation);
  });
})
