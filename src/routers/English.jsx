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

const EnRoutes = (props) => (
  <Switch>
    <Route exact path={`${props.match.url}/`} component={() => <p>en Top</p>} />
    <Route path={`${props.match.url}/:slug`} component={() => <p>en RouteSingle</p>} />
  </Switch>
)


export default withRouter(connect()(EnRoutes));
