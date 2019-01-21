import * as React from 'react';
import { ILastUpdatedProps } from "../../types";
import { TIMESTAMP_UNSET } from "../../constants";
import styled from 'styled-components';

const LastUpdatedSC = styled.div`
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  filter: opacity(40%);
`;

const addLeadingZeros = (v: string): string => v.length < 2 ? '0' + v : v;

const LastUpdated: React.SFC<ILastUpdatedProps> = (props) => {
  const displayLastUpdatedDate = new Date(props.timestamp * 1000);
  const hh = addLeadingZeros('' + displayLastUpdatedDate.getHours());
  const mm = addLeadingZeros('' + displayLastUpdatedDate.getMinutes());
  return (
    <LastUpdatedSC>
      {props.timestamp !== TIMESTAMP_UNSET ?
      `Updated at ${hh}:${mm}`
       : '' }
    </LastUpdatedSC>
  )
};

export default LastUpdated;
