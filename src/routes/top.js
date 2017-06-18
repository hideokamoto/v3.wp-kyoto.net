import React, { Component } from 'react';
import Archive from '../components/archives/index'
class RouteTop extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <h3>single topic content</h3>
        <p>{match.params.topicId}</p>
        <p>Top</p>
        <Archive />
      </div>
    )
  }
}
export default RouteTop;
