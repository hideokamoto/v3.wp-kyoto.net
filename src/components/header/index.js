import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="wrap">
          <h1 className="Header-title">
            <Link to="/">WP-Kyoto</Link>
          </h1>
          <p className="Header-description">WordPressとかAWSのブログ</p>
        </div>
      </div>
    );
  }
}

export default Header;
