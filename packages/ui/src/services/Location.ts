class Location {
  static readonly UNSET = new Location(999, 999, 'unknown');
  readonly lat: number;
  readonly lon: number;
  readonly display: string;

  constructor(lat: number, lon: number, display: string = 'unknown') {
    this.lat = lat;
    this.lon = lon;
    this.display = display;
  }
}

export default Location;