import * as React from "react";
import styled from 'styled-components';
import { ILocationDisplayProps } from "../../types";

const LocationDisplaySC = styled.div`
  font-size: 32px;
  height: 1em;
  text-align: center
`;

const LocationDisplay: React.SFC<ILocationDisplayProps> = (props) => {
  return (
    <LocationDisplaySC>{props.name}</LocationDisplaySC>
  )
};

export default LocationDisplay;