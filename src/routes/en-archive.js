import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Archive from '../components/archives/index'
import RouteEnSingle from './en-single'
class RouteEnArchive extends Component {
  render() {
    const {match} = this.props
    return (
      <div>
        <h3>English Archive</h3>
        <Switch>
          <Route path={`${match.url}/:slug`} component={RouteEnSingle} />
          <Route exact path={match.url} component={Archive}/>
        </Switch>
      </div>
    )
  }
}
export default RouteEnArchive;
