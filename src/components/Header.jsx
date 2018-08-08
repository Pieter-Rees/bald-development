import React, { } from 'react';
import Global from './Global.jsx';
import Navigation from './modules/organisms/Navigation.jsx';
import Social from './modules/organisms/Social.jsx';
import styled from 'styled-components';

const SHeader = styled.header`
  display: grid;
  position: fixed;
  width: 100%;
  grid-template-columns: 10% auto 10%;
  background-color: ${props => props.theme.colors.color3};
  z-index: 5;
}
`;

const SHeaderContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  padding: .5em;
  flex: 1;
  display: flex;
  justify-self: flex-start;
`;

class Header extends React.Component {
  render() {
    return (
        <SHeader className="header">
          <SHeaderContainer className="header-container">
            <Navigation></Navigation>
          </SHeaderContainer>
        </SHeader>
    );
  }
};

export default Header;
