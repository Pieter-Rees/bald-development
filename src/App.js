import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

const theme = {
  colors: {
    /* Coolors Exported Palette - coolors.co/2b303a-92dce5-eee5e9-7c7c7c-d64933 */
    color1: '#61892f',
    color2: '#86c232',
    color3: '#222629',
    color4: '#373b4f',
    color5: '#6b6e70',
    color6: '#fff',
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
