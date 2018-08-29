import * as React from 'react';
import { ISummaryProps } from '../../types';
import styled from 'styled-components';

const SummarySC = styled.div`
  flex-basis: 70%;
`;

const Summary: React.SFC<ISummaryProps> = (props) => (
  <SummarySC className="summary">{props.text}</SummarySC>
);

export default Summary;