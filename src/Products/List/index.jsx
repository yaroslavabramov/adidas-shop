import React from 'react';
import styled from 'styled-components';

import Toppanel from './TopPanel';
import Catalog from './Catalog';

const Wrapper = styled.main`
  width: calc(100% - 414px);
`;

export default () => (
  <Wrapper>
    <Toppanel />
    <Catalog />
  </Wrapper>
);
