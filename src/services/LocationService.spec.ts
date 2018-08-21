import LocationService from './LocationService';

describe('Location Service', () => {
  let mockGetCurrentPosition: any;

  beforeEach(() => {
    mockGetCurrentPosition = jest.fn().mockImplementation(
      (resolve: any, reject: any) => {
        console.log('geo location geo location', resolve);
        resolve({coords: {lattitude: 1, longitude: 2}});
      }
    );

    // @ts-ignore
    global.navigator.geolocation =  {
      getCurrentPosition:
      mockGetCurrentPosition
    };
  });

  it('should get current location from browser', (done) => {
    const locationService = new LocationService();
    locationService.getLocation()
      .then(() => {
        expect(mockGetCurrentPosition).toHaveBeenCalled();
        done()
      })
  })
});