import LocationPicker from "react-location-picker";
import * as React from "react";
import { ILocationSelectorProps } from "../../types";
import styled from 'styled-components';

const LSInstruction = styled.p`
  font-size: small;
  color: darkgrey;
  text-align: center;
  margin-top: 5px;
`;

const LSCreditLink = styled.a`
  color: steelblue;
`;

const LocationSelector: React.SFC<ILocationSelectorProps> = (props) => {
  return (
    <div>
      <LocationPicker
        containerElement={ <div /> }
        mapElement={ <div style={ {height: '400px'} } /> }
        onChange={props.onLocationChange}
        defaultPosition={props.defaultPosition}
      />
      <LSInstruction>
        Drag marker to select new location. By <LSCreditLink href="https://github.com/rameshsyn/react-location-picker">rameshsyn</LSCreditLink>.
      </LSInstruction>
    </div>
  )
};

export default LocationSelector;
