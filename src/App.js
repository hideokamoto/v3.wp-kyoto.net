import React, { Component } from "react";
// Redux
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

// Router
import { BrowserRouter } from "react-router-dom";

// components
import AppLayouts from "./components/Layouts";
//<AdAmazonLeaderBoard />
//import AdAmazonLeaderBoard from './components/Ad/Amazon';

// routes
import Routes from "./routers/index";

import "./App.css";

// Store
import { history, configureStore } from "./redux/stores/configureStore";
const initialState = {};
const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <AppLayouts>
              <Routes />
            </AppLayouts>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
