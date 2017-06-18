import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';
import Globnav from './components/globnav/index';
import Archive from './components/archives/index';
import Single from './components/single/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Globnav />
        <div className="Main">
          <Single />
        </div>
      </div>
    );
  }
}

export default App;
