import * as React from 'react';
import { ISummaryProps } from '../../types';
import styled from 'styled-components';

const SummarySC = styled.div`
  text-align: center;
  margin-top: 20px;
  min-height: 1em;
`;

const Summary: React.SFC<ISummaryProps> = (props) => (
  <SummarySC className="summary">{props.text}</SummarySC>
);

export default Summary;