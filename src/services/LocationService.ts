import Location from './Location';

class LocationService {
  getLocation(): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(loc =>
        resolve(new Location(loc.coords.latitude, loc.coords.longitude)))
    })
  }
}

export default LocationService;