import React from 'react';
import styled from 'styled-components';

import Searchbar from './Searchbar';
import Menu from './Menu';
import Logo from './images/logo.png';

const Sidebar = styled.aside`
  margin:0;
  padding:0;
  width: 100%;
  height: 64px;
  background-color: #0e0e0e;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 50px auto;
  background-position: 10px center;
  @media screen and (min-width: 768px){
    width: 327px;
    background-position: center 50px;
    background-size: 77px auto;
    min-height: 1171px;
  }
  @media screen and (min-width: 992px){
    width: 414px;
  }
`;

export default () => (
  <Sidebar>
    <Searchbar />
    <Menu />
  </Sidebar>
);
