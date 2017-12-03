import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

const theme = {
  colors: {
    primary: '#E4E4E4',
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
