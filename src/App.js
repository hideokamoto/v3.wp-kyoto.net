import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Semantic UI
import {
  Button,
  Container,
  Grid,
  Divider,
  Header,
} from 'semantic-ui-react';

// components
import AppLayouts from './components/Layouts';
import  AdAmazonLeaderBoard from './components/Ad/Amazon';

import './App.css';
//import Header from './components/header/index';
import Globnav from './components/globnav/index';

import RouteTop from './routes/top'
import RouteAbout from './routes/about'
import RouteEnTop from './routes/en-top'
import RouteSingle from './routes/single'

// Store
import { history, configureStore } from './redux/stores/configureStore';
const initialState = {}
const store = configureStore(initialState);
class AppRoutes extends React.Component {
  componentWillUpdate() {
    const MauticJS = 'MauticJS'
    if (window.hasOwnProperty(MauticJS)) {
      window[MauticJS].sendPageview()
    }
  }
  render () {
    return (
      <Switch>
        <Route exact path="/about" component={RouteAbout} />
        <Route exact path="/" component={RouteTop} />
        <Route path="/en" component={RouteEnTop} />
        <Route path="/:slug" component={RouteSingle} />
      </Switch>
    )
  }
}

class RouterLayout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Globnav />
          <div className="Main">
            <main className="wrap">
              <iframe
                src="https://rcm-fe.amazon-adsystem.com/e/cm?f=ifr&t=wp-kyoto-22&o=9&p=48&l=st1&mode=kindle-jp&search=WordPress&fc1=000000&lt1=_top&lc1=A43907&bg1=FFFFFF"
                width="728"
                height="90"
                scrolling="no"
                style={{
                  border:'none',
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '100%',
                }}
              />
              <AppRoutes />
            </main>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <AppLayouts>
              <AdAmazonLeaderBoard />
            </AppLayouts>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
