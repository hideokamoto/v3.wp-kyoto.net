import React, { Component } from 'react';
import './index.css';

class GlobNav extends Component {
  render() {
    return (
      <div className="Globnav">
        <nav className="wrap">
          <ul className="Globnav-row">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">WordPress.org</a></li>
            <li><a href="">GitHub</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default GlobNav;
