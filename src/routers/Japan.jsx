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
import Top from './pages/Top';
import Single from './pages/Single';

const JaRoutes = (props) => (
  <Switch>
    <Route exact path="/" component={() => <Top lang="ja" />} />
    <Route path="/:slug" component={() => <Single lang="ja" />} />
  </Switch>
)


export default withRouter(connect()(JaRoutes));
