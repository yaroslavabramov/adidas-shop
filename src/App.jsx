import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/fonts.css';

import Sidebar from './Sidebar';
import List from './Products/List';
import Show from './Products/Show';

const Page = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <Router>
      <Page>
        <Sidebar />
        <Route exact path="/" component={List} />
        <Route exact path="/item" component={Show} />
      </Page>
    </Router>
  );
}

export default App;
