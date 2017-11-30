import React, { Component } from 'react';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Global from './components/global.jsx';
import styled, { ThemeProvider } from 'styled-components';

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
