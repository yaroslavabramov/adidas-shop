import React from 'react';
import styled from 'styled-components';

import HeaderRight from './Header/Right';
import HeaderLeft from './Header/Left';
import PhotoGallery from './PhotoGallery';
import Description from './Description';
import BuyNow from './BuyNow';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  @media screen and (min-width: 768px){
      width: calc(100% - 327px);
  }
  @media screen and (min-width: 992px){
      width: calc(100% - 414px);
  }
`;

const Header = styled.header`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (min-width: 768px){
    flex-direction: row;
    position: absolute;
  }
`;

export default () => (
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
