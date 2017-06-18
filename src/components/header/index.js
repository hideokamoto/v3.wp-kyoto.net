import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="wrap">
          <h1 className="Header-title">WP-Kyoto</h1>
          <p className="Header-description">WordPressとかAWS</p>
        </div>
      </div>
    );
  }
}

export default Header;
