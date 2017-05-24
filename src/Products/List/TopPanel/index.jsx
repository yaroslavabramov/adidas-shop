import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Logo from './images/filter.png';

const Panel = styled.div`
  box-sizing: border-box;
  margin:0;
  padding: 15px;
  border-bottom: 3px solid #e7e7e7;
  display: flex;
  align-items:center;
  @media screen and (min-width: 768px){
    padding: 11px 0 11px 25px;
  }
`;

const Icon = styled.div`
  @media screen and (min-width: 768px){
    height: 55px;
    min-width: 55px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: 8px 11px;
    background-color: #ebebeb;
    margin-right: 30px;
  }
`;

export default () => (
  <Panel>
    <Icon />
    <Filters />
  </Panel>
);
