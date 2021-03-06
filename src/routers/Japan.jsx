import React from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'

// Router
import { Route, withRouter, Switch } from 'react-router-dom'

// Pages
import Top from './pages/Top'
import Single from './pages/Single'
import PageById from './pages/PageById'
import EventTop from './pages/events/Top'
// routes
import RouteProducts from './ProductsJa'

// HOC
import { prerenderStaticPage } from '../prerender'

const JaRouteSingle = props => {
  const { slug } = props.match.params
  return <Single lang="ja" slug={slug} />
}

JaRouteSingle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  })
}
JaRouteSingle.defaultProps = {
  match: {
    params: {
      slug: ''
    }
  }
}

const JaRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={prerenderStaticPage(() => <Top lang="ja" />)}
    />
    <Route
      path="/privacy-policy"
      component={prerenderStaticPage(() => (
        <PageById lang="ja" pageId={4915} />
      ))}
    />
    <Route path="/products" component={RouteProducts} />
    <Route
      path="/events"
      component={prerenderStaticPage(() => <EventTop lang="ja" />)}
    />
    <Route path="/:slug" component={JaRouteSingle} />
  </Switch>
)

export default withRouter(connect()(JaRoutes))
