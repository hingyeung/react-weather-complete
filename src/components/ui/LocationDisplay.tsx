import * as React from "react";
import styled from 'styled-components';
import { ILocationDisplayProps } from "../../types";
import LocationPicker from 'react-location-picker';

const LocationDisplaySC = styled.div`
  font-size: 32px;
  height: 1em;
  text-align: center
`;

const LocationDisplay: React.SFC<ILocationDisplayProps> = (props) => {
  return (
    <div>
      <LocationDisplaySC>{props.name}</LocationDisplaySC>
      <LocationPicker
        containerElement={ <div style={ {height: '100%'} } /> }
        mapElement={ <div style={ {height: '400px'} } /> } />
    </div>
  )
};

export default LocationDisplay;