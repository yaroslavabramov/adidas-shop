import React from 'react';
import styled from 'styled-components';

import HeaderRight from './Header/Right';
import HeaderLeft from './Header/Left';
import PhotoGallery from './PhotoGallery';
import Description from './Description';
import BuyNow from './BuyNow';

const Wrapper = styled.div`
  width: calc(100% - 414px);
  display: flex;
  flex-flow: column;
`;

const Header = styled.header`
  width: inherit;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 25px;
`;

export default ()=> {
  return (
    <Wrapper>
      <Header>
        <HeaderLeft />
        <HeaderRight />
      </Header>
      <PhotoGallery />
      <Description />
    <BuyNow />
  </Wrapper>
  );
};
