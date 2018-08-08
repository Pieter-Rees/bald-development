import React from 'react';
import styled from 'styled-components';

const LogoS = styled.h1`
  text-align: center;
  font-size: 12em;
  margin: 0;
  font-family: 'Atomic Age';
  color: ${props => props.theme.colors.color3};

`;

function Logo(props) {
  return <LogoS>{props.text}</LogoS>;
}

export default Logo;
