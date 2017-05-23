import React from 'react';
import styled from 'styled-components';

import Linkimg1 from './images/link1@3x.jpg';
import Linkimg2 from './images/link2@3x.jpg';
import Linkimg3 from './images/link3@3x.jpg';
import Linkimg4 from './images/bitmap1.jpg';
import Itemphoto from './images/bitmap1@3x.jpg';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Current = styled.img`
  margin-top: 30px;
  max-width: 804px;
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 15px;
`;

const PhotoButton = styled.button`
  background: none;
  padding: 0;
  margin-right: 15px;
  border: none;
  outline: none;
  ${props => props.isActive && `
    border: 5px solid #e7e7e7;
  `};
`;

const Img = styled.img`
  max-width: 180px;
  width: 100%;
  height: 100%;
`;

export default () => (
  <Gallery>
    <Current src={Itemphoto} alt="item img" />
    <Menu>
      <PhotoButton><Img src={Linkimg1} alt="" /></PhotoButton>
      <PhotoButton><Img src={Linkimg2} alt="" /></PhotoButton>
      <PhotoButton><Img src={Linkimg3} alt="" /></PhotoButton>
      <PhotoButton isActive><Img src={Linkimg4} alt="" /></PhotoButton>
      <PhotoButton><Img src={Linkimg2} alt="" /></PhotoButton>
    </Menu>
  </Gallery>
);
