import React from 'react';
import styled from 'styled-components';
import getImageLink from '../../../Components/ImageLink';

const Menu = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 25px;
  margin-top: 15px;
`;

const Img = styled.img`
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  max-width: 90px;
  width: 15%;
  border: 5px solid #fff;
  transition: all 0.4s;
  ${props => props.isActive && `
    border: 5px solid #e7e7e7;
  `};
  &:hover{
    border: 5px solid #e7e7e7;
  }
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`;

export default props => (
  <Menu>
    {props.images ? props.images.map((image, index) => (
      <Img
        src={getImageLink(image, 128)}
        alt=""
        isActive={props.currentIndex === index}
        onClick={() => props.handleClick(index)}
      />
    )) : null }
  </Menu>
);
