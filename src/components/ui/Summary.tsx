import * as React from 'react';
import { ISummaryProps } from '../../types';

const Summary: React.SFC<ISummaryProps> = (props) => (
  <div className="summary">{props.text}</div>
);

export default Summary;