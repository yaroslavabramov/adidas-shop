import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CatalogPage from './catalog page'
import ItemPage from './item page'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/item" component={CatalogPage} />
          <Route exact path="/" component={ItemPage} />
        </div>
      </Router>
    );
  }
}

export default App;
