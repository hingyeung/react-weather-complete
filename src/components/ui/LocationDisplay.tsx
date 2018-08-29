import * as React from "react";
import styled from 'styled-components';

const LocationDisplaySC = styled.div`
  flex-basis: 60%;
  font-size: 48px;
  height: 1em;
`;

const LocationDisplay: React.SFC = (props) => {
  return (
    <LocationDisplaySC>Melbourne, Vic</LocationDisplaySC>
  )
};

export default LocationDisplay;