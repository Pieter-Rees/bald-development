import React, { } from 'react';
import Navigation from './modules/organisms/navigation.jsx';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Navigation></Navigation>
      </header>
    );
  }
};

export default Header;
