import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header wrap">
          <h1 className="Header-title">WP-Kyoto</h1>
          <p className="Header-description">WordPressとかAWS</p>
        </div>
        <nav className="Globnav wrap">
          <ul className="Globnav-row">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">WordPress.org</a></li>
            <li><a href="">GitHub</a></li>
          </ul>
        </nav>
        <div className="Main wrap">
          <div className="Post-meta">
            <span>2017年6月9日</span>
            <span>投稿者:</span>
            <span>山田太郎</span>
          </div>
          <h2>Post Title</h2>
          <div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
