import Location from './Location';

class LocationService {
  getLocation(): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(loc => {
        const location = new Location(loc.coords.latitude, loc.coords.longitude);
        // setLocation(location);
        resolve(location)
      })
    })
  }
}

export default LocationService;