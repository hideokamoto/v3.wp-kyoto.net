import React, { Component } from 'react';
import Single from '../components/single/index';

class RouteEnSingle extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <h3>English Single</h3>
        <p>{match.params.slug}</p>
        <Single />
      </div>
    )
  }
}
export default RouteEnSingle;
