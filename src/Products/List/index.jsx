import React from 'react';
import styled from 'styled-components';

import TopPanel from './TopPanel';
import ItemGrid from './ItemGrid';

const Wrapper = styled.main`
  width: calc(100% - 414px);
`;

export default () => (
  <Wrapper>
    <TopPanel />
    <ItemGrid />
  </Wrapper>
);
