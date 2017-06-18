import React, { Component } from 'react';
class RouteAbout extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <h3>single topic content</h3>
        <p>{match.params.topicId}</p>
      </div>
    )
  }
}
export default RouteAbout;
