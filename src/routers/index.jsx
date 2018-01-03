import React from 'react'
// Redux
import { connect } from 'react-redux'

// Router
import { Route, withRouter, Switch } from 'react-router-dom'

// HOC
import {
  prerenderStaticPage
} from '../prerender';

// Semantic UI
// components

// Pages
import PageAbout from './pages/About'

// Routes
import JaRoutes from './Japan'
import EnRoutes from './English'

class Routes extends React.Component {
  componentWillUpdate () {
    const MauticJS = 'MauticJS'
    if (window.hasOwnProperty(MauticJS)) {
      window[MauticJS].sendPageview()
    }
  }
  render () {
    return (
      <Switch>
        <Route exact path="/about" component={prerenderStaticPage(PageAbout)} />
        <Route path="/en" component={EnRoutes} />
        <Route path="/" component={JaRoutes} />
      </Switch>
    )
  }
}

export default withRouter(connect()(Routes))
