import * as React from 'react';
import { ILastUpdatedProps } from "../../types";
import { TIMESTAMP_UNSET } from "../../constants";

const LastUpdated: React.SFC<ILastUpdatedProps> = (props) => {
  return (
    <div className="last-updated">{props.timestamp !== TIMESTAMP_UNSET ? props.timestamp : '' }</div>
  )
};

export default LastUpdated;