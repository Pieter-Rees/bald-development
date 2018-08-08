import React, { } from 'react';
import styled from 'styled-components';

const SMenulist = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  li {
    list-style: none;
    color: ${props => props.theme.colors.color2}
  }
`;

const SlistItem = styled.li`
  list-style: none;
  margin-right: 1em;
`;

class Menu extends React.Component {

  render() {
    return (
      <SMenulist>
        <SlistItem>Wie?</SlistItem>  
        <SlistItem>Wat?</SlistItem>  
        <SlistItem>Waar?</SlistItem>  
        <SlistItem></SlistItem>  
      </SMenulist>
    );
  }
};

export default Menu;
