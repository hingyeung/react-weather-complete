import * as React from 'react';
import styled from 'styled-components';
import { SFC } from 'react';
import githubIcon from '../../assets/github.svg'
import emailIcon from '../../assets/mail.svg'

const AuthorSC = styled.div`
  text-align: center;
  font-size: small;
  margin-top: 50px;
`;

const SocialIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const Link = styled.a`
  margin: 5px;
`;

const Author: SFC = (props) => {
  return (
    <AuthorSC>
      <Link href="mailto:samli@samuelli.net">
        <SocialIcon src={emailIcon}/>
      </Link>
      <Link href="https://github.com/hingyeung/react-weather">
        <SocialIcon src={githubIcon}/>
      </Link>
    </AuthorSC>
  )
};

export default Author;
