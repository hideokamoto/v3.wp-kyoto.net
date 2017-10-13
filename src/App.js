import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Header from './components/header/index';
import Globnav from './components/globnav/index';

import RouteTop from './routes/top'
import RouteAbout from './routes/about'
import RouteEnTop from './routes/en-top'
import RouteSingle from './routes/single'

class App extends Component {
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
              <Switch>
                <Route exact path="/about" component={RouteAbout} />
                <Route exact path="/" component={RouteTop} />
                <Route path="/en" component={RouteEnTop} />
                <Route path="/:slug" component={RouteSingle} />
              </Switch>
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
