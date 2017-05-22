import React from 'react';
import styled from 'styled-components';

import Linkimg_1 from './images/link1@3x.jpg';
import Linkimg_2 from './images/link2@3x.jpg';
import Linkimg_3 from './images/link3@3x.jpg';
import Linkimg_4 from './images/bitmap1.jpg';
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
      margin-right: 20px;
      margin-left: 5px;
      border: 5px solid #e7e7e7;
    `};
`;

const Img = styled.img`
  max-width: 180px;
  width: 100%;
  height: 100%;
`;

const Lines = styled.div`
  margin: 0 15px;
  flex: 1 1 159px;
`;

const Line = styled.hr`
  height: 3px;
  margin: 3px 0;
  background-color: #e7e7e7;
  border-radius: 1.5px;
  border: none;
`;

const SeeMore = styled.button`
  padding:0;
  max-width: 45px;
  max-height: 57px;
  background: none;
  border: none;
  text-align: left;
  font-family: AvenirNextReg;
  font-size: 14px;
  color: #c0c0c0;
  margin-left: 10px;
  &:hover{
    color: #828282;
    font-size: 1em;
  }
`;

export default ()=> {
  return(
    <Gallery>
      <Current src={Itemphoto} alt='item img' />
      <Menu>
        <PhotoButton><Img src={Linkimg_1} alt='' /></PhotoButton>
        <PhotoButton><Img src={Linkimg_2} alt='' /></PhotoButton>
        <PhotoButton><Img src={Linkimg_3} alt='' /></PhotoButton>
        <PhotoButton isActive ><Img src={Linkimg_4} alt='' /></PhotoButton>
        <Lines>
          <Line />
          <Line />
          <Line />
        </Lines>
        <SeeMore>see more photos</SeeMore>
      </Menu>
    </Gallery>
  );
};
