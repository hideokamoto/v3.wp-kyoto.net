import React, { Component } from 'react';
import Single from '../components/single/index';

class RouteSingle extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <h3>single topic content</h3>
        <p>{match.params.slug}</p>
        <Single />
      </div>
    )
  }
}
export default RouteSingle;
