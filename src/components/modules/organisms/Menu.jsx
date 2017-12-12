import React, { } from 'react';
import styled from 'styled-components';

const SMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;
  background-color: red;
`;

class Menu extends React.Component {

  render() {
    return (
      <SMenu>
      </SMenu>
    );
  }
};

export default Menu;
