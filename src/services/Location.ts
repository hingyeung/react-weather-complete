class Location {
  static readonly UNSET = new Location(999, 999);
  readonly lat: number;
  readonly lon: number;

  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }
}

export default Location;