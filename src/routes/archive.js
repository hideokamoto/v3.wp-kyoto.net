import React, { Component } from 'react';
import Archive from '../components/archives/index'

class RouteArchive extends Component {
  render() {
    return (
      <div>
        <h3>single topic content</h3>
        <p>{match.params.topicId}</p>
        <Archive />
      </div>
    )
  }
}
export default RouteArchive;
