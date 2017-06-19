import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import RouteEnSingle from './en-single'
import RouteEnArchive from './en-archive'
class RouteEnTop extends Component {
  render() {
    const {match} = this.props

    return (
      <Switch>
        <Route path={`${match.url}/:slug`} component={RouteEnSingle} />
        <Route exact path={match.url} component={RouteEnArchive}/>
      </Switch>
    )
  }
}

export default RouteEnTop;
