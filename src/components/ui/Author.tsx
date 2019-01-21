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
  width: 18px;
  height: 18px;
`;

const Link = styled.a`
  margin: 5px;
`;

const Name = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`;

const Author: SFC = (props) => {
  return (
    <AuthorSC>
      <Name>&#169; Samuel Li</Name>
      <div>
        <Link href="mailto:samli@samuelli.net">
          <SocialIcon src={emailIcon}/>
        </Link>
        <Link href="https://github.com/hingyeung/react-weather">
          <SocialIcon src={githubIcon}/>
        </Link>
      </div>
    </AuthorSC>
  )
};

export default Author;
