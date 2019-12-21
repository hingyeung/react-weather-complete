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

const IconLink: SFC<{iconSrc: string;} & React.HTMLProps<HTMLAnchorElement & HTMLImageElement>> = (props) => {
  const { className, href, target, alt } = props;
  return (
    <a {...{className, href, target}}>
      <SocialIcon alt={alt} src={props.iconSrc} />
    </a>
  )
};

const StyledIconLink = styled(IconLink)`
  margin: 0 5px;
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
        <StyledIconLink href="mailto:samli@samuelli.net" alt="email icon" iconSrc={emailIcon}/>
        <StyledIconLink href="https://github.com/hingyeung/react-weather-complete" alt="github icon" target="_blank" iconSrc={githubIcon}/>
      </div>
    </AuthorSC>
  )
};

export default Author;
