import React from 'react';
import styled from 'styled-components';

import Searchbar from './Searchbar';
import Menu from './Menu';
import Logo from './images/logo.png';

const Sidebar = styled.aside`
  margin:0;
  padding:0;
  width: 414px;
  min-height: 1171px;
  background-color: #0e0e0e;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center 50px;
`;

export default () => (
  <Sidebar>
    <Searchbar />
    <Menu />
  </Sidebar>
);
