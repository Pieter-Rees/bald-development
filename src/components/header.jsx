import React, { } from 'react';
import Navigation from './modules/organisms/navigation.jsx';
import Social from './modules/organisms/social.jsx';
import styled from 'styled-components';

const SHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 10% auto 10%;
  padding: 20px;
  background-color: $steel;
}
`;

const SHeaderContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-self: flex-end;
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
          <Social></Social>
        </SHeaderContainer>
      </SHeader>
    );
  }
};

export default Header;
