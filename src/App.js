import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

const theme = {
  colors: {
    /* Coolors Exported Palette - coolors.co/2b303a-92dce5-eee5e9-7c7c7c-d64933 */
    color1: 'rgba(43, 48, 58, 1)',
    color2: 'rgba(146, 220, 229, 1)',
    color3: 'rgba(238, 229, 233, 1)',
    color4: 'rgba(124, 124, 124, 1)',
    color5: 'rgba(214, 73, 51, 1)',
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <div className="App-wrapper">
            <Header />
            <Main />
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
