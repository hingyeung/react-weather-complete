import LocationPicker from "react-location-picker";
import * as React from "react";
import { ILocationSelectorProps } from "../../types";

const LocationSelector: React.SFC<ILocationSelectorProps> = (props) => {
  return (
    <LocationPicker
      containerElement={ <div /> }
      mapElement={ <div style={ {height: '300px'} } /> }
      onChange={props.onLocationChange}
      defaultPosition={props.defaultPosition}
    />
  )
};

export default LocationSelector;