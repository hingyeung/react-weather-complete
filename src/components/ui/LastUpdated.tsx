import * as React from 'react';
import { ILastUpdatedProps } from "../../types";
import { TIMESTAMP_UNSET } from "../../constants";
import styled from 'styled-components';

const LastUpdatedSC = styled.div`
  text-align: center;
  font-size: 12px;
`;

const LastUpdated: React.SFC<ILastUpdatedProps> = (props) => {
  const displayLastUpdatedDate = new Date(props.timestamp * 1000);
  return (
    <LastUpdatedSC>
      {props.timestamp !== TIMESTAMP_UNSET ?
      `Updated at ${displayLastUpdatedDate.getHours()}:${displayLastUpdatedDate.getMinutes()}`
       : '' }
    </LastUpdatedSC>
  )
};

export default LastUpdated;