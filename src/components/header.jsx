import React, { } from 'react';
import Navigation from './modules/organisms/navigation.jsx';
import Social from './modules/organisms/social.jsx';
import styled from 'styled-components';
import Global from './global.jsx';

const SHeader = styled.header`
  display: grid;
  position: fixed;
  width: 100%;
  grid-template-columns: 10% auto 10%;
  //background-color: ${props => props.theme.colors.primary};
}
`;

const SHeaderContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-self: flex-start;
`;

const SNavigation = styled.div`
  flex: 1;
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
