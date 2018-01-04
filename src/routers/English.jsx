import React from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'

// Router
import { Route, withRouter, Switch } from 'react-router-dom'

// Pages
import Archives from './pages/Archives'
import Single from './pages/Single'
// HOC
import { prerenderStaticPage } from '../prerender'

const EnRoutes = props => (
  <Switch>
    <Route
      exact
      path={`${props.match.url}/`}
      component={prerenderStaticPage(() => (
        <Archives lang="en" url={props.match.url} />
      ))}
    />
    <Route
      path={`${props.match.url}/:slug`}
      component={prop => {
        const { slug } = prop.match.params
        return <Single lang="en" url={props.match.url} slug={slug} />
      }}
    />
  </Switch>
)

EnRoutes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      slug: PropTypes.string
    }).isRequired
  })
}
EnRoutes.defaultProps = {
  match: {
    url: '/en',
    params: {
      slug: ''
    }
  }
}

export default withRouter(connect()(EnRoutes))
