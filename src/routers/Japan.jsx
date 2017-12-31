import React from 'react';
// Redux
import { connect } from 'react-redux';

// Router
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';

// Pages

const JaRoutes = (props) => (
  <Switch>
    <Route exact path="/" component={() => <p>Top</p>} />
    <Route path="/:slug" component={() => <p>RouteSingle</p>} />
  </Switch>
)


export default withRouter(connect()(JaRoutes));
