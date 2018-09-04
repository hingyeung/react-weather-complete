import * as React from 'react';
import styled from 'styled-components';
import { SFC } from 'react';

const AuthorSC = styled.div`
  text-align: center;
  font-size: small;
  margin-top: 50px;
`;

const EmailLink = styled.a`
  color: steelblue;
`;

const Author: SFC = (props) => {
  return (
    <AuthorSC><EmailLink href="mailto:samli@samuelli.net">Samuel Li</EmailLink></AuthorSC>
  )
};

export default Author;