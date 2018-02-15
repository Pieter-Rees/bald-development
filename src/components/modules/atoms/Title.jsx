import React from 'react';
import styled from 'styled-components';

const SH2 = styled.h2`
  color: ${props => props.theme.colors.color3};
}
`;

function Title(props) {
  return <SH2>{props.text}</SH2>;
}

export default Title;
