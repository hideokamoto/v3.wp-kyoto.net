import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.css';

class Archives extends Component {
  render() {
    const {match} = this.props
    return (
      <div className="Archives">
        <div className="wrap">
          <h1 className="Archives-title">WP-Kyoto</h1>
          <p className="Archives-description">WordPressとかAWS</p>
          <ul>
            <li><Link to={`${match.url}/about`}>About</Link></li>
            <li><Link to={`${match.url}/topics`}>Topics</Link></li>
            <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

Archives.propTypes = {
  'match': PropTypes.shape({
    'url': PropTypes.string
  })
}
Archives.defaultProps = {
  'match': {
    'url': ''
  }
}

export default Archives;
