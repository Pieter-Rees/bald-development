import React, { } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $steel;
  flex: 1;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavListItem = styled.li`
  list-style: none;
`;

class SNavigation extends React.Component {

  render() {
    return (
      <Nav className='navigation'>
        <NavList className='navigation-list'>
          <NavListItem>About</NavListItem>
          <NavListItem>Work</NavListItem>
          <NavListItem>Contact</NavListItem>
        </NavList>
      </Nav>
    );
  }
};

export default SNavigation;
