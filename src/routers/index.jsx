import React from 'react';
// Redux
import { connect } from 'react-redux';

// Router
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';

// Semantic UI
// components

// Pages

class Routes extends React.Component {
  /*
  componentWillUpdate() {
    const MauticJS = 'MauticJS'
    if (window.hasOwnProperty(MauticJS)) {
      window[MauticJS].sendPageview()
    }
  }
  */
  render () {
    return (
      <Switch>
        <Route exact path="/about" component={() => <p>RouteAbout</p>} />
        <Route exact path="/" component={() => <p>Top</p>} />
        <Route path="/en" component={() => <p>RouteEnTop</p>} />
        <Route path="/:slug" component={() => <p>RouteSingle</p>} />
      </Switch>
    )
  }
}


export default withRouter(connect()(Routes));
