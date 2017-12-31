import React from 'react';
import PropTypes from 'prop-types';
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
    <Route exact path={`${props.match.url}/`} component={() => <Archives lang="en" url={props.match.url} />} />
    <Route path={`${props.match.url}/:slug`} component={() => <Single lang="en" url={props.match.url} />} />
  </Switch>
)

EnRoutes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  })
}
EnRoutes.defaultProps = {
  match: {
    url: '/en',
  }
}


export default withRouter(connect()(EnRoutes));
