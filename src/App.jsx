import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './css/fonts.css';

import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

const Page = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

function App() {
  return (
    <Router>
      <Page>
        <Sidebar />
        <Switch>
          <Route exact path="/products/:group/:type" component={List} />
          <Route exact path="/products/:group/:type/:id" component={Show} />
          <Redirect from="/" to="/products/football/cleats" />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
