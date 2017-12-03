import React from 'react';
import styled from 'styled-components';

const LogoS = styled.h1`
  text-align: center;
  font-size: 250px;
  margin: 0;
`;

function Logo(props) {
  return <LogoS>{props.text}</LogoS>;
}

export default Logo;
