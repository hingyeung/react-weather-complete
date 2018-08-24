import * as React from 'react';
import { ISummaryProps } from '../../types';

export default (props: ISummaryProps) => (
  <div className="summary">{props.text}</div>
);