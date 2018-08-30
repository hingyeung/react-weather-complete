import * as React from "react";
import styled from 'styled-components';
import { ILocationDisplayProps } from "../../types";

const LocationDisplaySC = styled.div`
  font-size: 32px;
  height: 1em;
  text-align: center;
  cursor: pointer;
`;

const LocationDisplay: React.SFC<ILocationDisplayProps> = (props) => {
  return (
    <LocationDisplaySC onClick={props.onClick}>{props.name}</LocationDisplaySC>
  )
};

export default LocationDisplay;