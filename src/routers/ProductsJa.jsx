import React from 'react'
// import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'

// Router
import { Route, withRouter, Switch } from 'react-router-dom'

// Pages
// product pages
import AlexaCloudQuiz from './pages/products/AlexaCloudQuiz'
import C3CloudFront from './pages/products/C3CloudFrontCache'
import Top from './pages/products/Top'

// HOC
import { prerenderStaticPage } from '../prerender'

const Routes = ({ match }) => (
  <Switch>
    <Route
      exact
      path={`${match.url}/`}
      component={prerenderStaticPage(() => <Top lang="ja" />)}
    />
    <Route
      path={`${match.url}/alexa-cloud-quiz`}
      component={prerenderStaticPage(() => <AlexaCloudQuiz lang="ja" />)}
    />
    <Route
      path={`${match.url}/c3-cloudfront-cache-controller`}
      component={prerenderStaticPage(() => <C3CloudFront lang="ja" />)}
    />
  </Switch>
)

export default withRouter(connect()(Routes))
