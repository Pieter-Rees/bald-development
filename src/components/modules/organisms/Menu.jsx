import React, { } from 'react';
import styled from 'styled-components';

const SMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;
  background-color: rgba(0,0,0, .3);
`;

class Menu extends React.Component {

  render() {
    return (
      <SMenu>
        Test
      </SMenu>
    );
  }
};

export default Menu;
