import * as React from "react";
import styled from 'styled-components';

const LocationDisplaySC = styled.div`
  font-size: 32px;
  height: 1em;
  text-align: center
`;

const LocationDisplay: React.SFC = (props) => {
  return (
    <LocationDisplaySC>Melbourne, Vic</LocationDisplaySC>
  )
};

export default LocationDisplay;