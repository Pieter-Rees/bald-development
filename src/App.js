import React, { Component } from 'react';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Global from './components/global.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
