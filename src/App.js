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
import RouteEnArchive from './routes/en-archive'
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
              <Switch>
                <Route exact path="/about" component={RouteAbout} />
                <Route exact path="/" component={RouteTop} />
                <Route path="/en" component={RouteEnArchive} />
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
