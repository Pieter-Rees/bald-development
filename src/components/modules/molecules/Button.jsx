import React, { } from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid pri;
`;

class Button extends React.Component {
  render() {
    return (
        <SButton>kut</SButton>
    );
  }
};

export default Button;
