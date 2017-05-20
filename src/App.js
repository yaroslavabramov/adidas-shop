import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './css/fonts.css'
import CatalogPage from './Products/List'
import ItemPage from './Products/Show'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CatalogPage} />
          <Route exact path="/item" component={ItemPage} />
        </div>
      </Router>
    );
  }
}

export default App;
