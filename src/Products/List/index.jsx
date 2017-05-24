import React from 'react';
import styled from 'styled-components';

import TopPanel from './TopPanel';
import ItemGrid from './ItemGrid';

const Wrapper = styled.main`
  width: 100%;
  @media screen and (min-width: 768px){
      width: calc(100% - 327px);
  }
  @media screen and (min-width: 992px){
      width: calc(100% - 414px);
  }
`;

export default () => (
  <Wrapper>
    <TopPanel />
    <ItemGrid />
  </Wrapper>
);
