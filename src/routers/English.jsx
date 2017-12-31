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
import Archives from './pages/Archives';
import Single from './pages/Single';

const EnRoutes = (props) => (
  <Switch>
    <Route exact path={`${props.match.url}/`} component={() => <Archives lang="en" />} />
    <Route path={`${props.match.url}/:slug`} component={() => <Single lang="en" />} />
  </Switch>
)


export default withRouter(connect()(EnRoutes));
