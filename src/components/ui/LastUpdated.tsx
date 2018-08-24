import * as React from 'react';
import { ILastUpdatedProps } from "../../types";
import { TIMESTAMP_UNSET } from "../../constants";

export default (props: ILastUpdatedProps) => {
  return (
    <div className="last-updated">{props.timestamp !== TIMESTAMP_UNSET ? props.timestamp : '' }</div>
  )
}