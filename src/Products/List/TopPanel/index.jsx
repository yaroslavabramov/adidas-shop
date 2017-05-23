import React from 'react';
import styled from 'styled-components';

import Filters from './Filters';

const Panel = styled.div`
  box-sizing: border-box;
  margin:0;
  padding-left: 25px;
  padding-top: 11px;
  padding-bottom: 11px;
  border-bottom: 3px solid #e7e7e7;
  display: flex;
  align-items:center;
`;

const Icon = styled.div`
  height: 55px;
  min-width: 55px;
  background-image: url($ {require('./images/filter.png')});
  background-repeat: no-repeat;
  background-position: 8px 11px;
  background-color: #ebebeb;
`;

export default () => (
  <Panel>
    <Icon />
    <Filters />
  </Panel>
);
