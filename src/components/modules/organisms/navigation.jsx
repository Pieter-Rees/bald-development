import React, { } from 'react';
import styled from 'styled-components';

const NavigationList = styled.nav`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid $steel;
`;

class Navigation extends React.Component {

  render() {
    return (
      <NavigationList className='navigation'>
        <ul className='navigation-list'>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </NavigationList>
    );
  }
};

export default Navigation;
