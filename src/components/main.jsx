import React, { } from 'react';
import Global from './global.jsx';
import styled, {ThemeProvider} from 'styled-components';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Work from './pages/work.jsx';

class Main extends React.Component {

  render() {
    return (
      <main className="main">
          <About></About>
          <Work></Work>
          <Contact></Contact>
      </main>
    );
  }
};

export default Main;
