import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

class GlobNav extends Component {
  render() {
    return (
      <div className="Globnav">
        <nav className="wrap">
          <ul className="Globnav-row">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/en">English</Link></li>
            <li>
              <a
                href="https://profiles.wordpress.org/hideokamoto"
                target="_blank"
                rel="noopener noreferrer"
              >WordPress.org</a>
            </li>
            <li>
              <a
                href="https://github.com/hideokamoto/"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default GlobNav;
