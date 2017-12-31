import React from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'

// Router
import { Route, withRouter, Switch } from 'react-router-dom'

// Pages
import Top from './pages/Top'
import Single from './pages/Single'

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
    <Route exact path="/" component={() => <Top lang="ja" />} />
    <Route path="/:slug" component={JaRouteSingle} />
  </Switch>
)

export default withRouter(connect()(JaRoutes))
