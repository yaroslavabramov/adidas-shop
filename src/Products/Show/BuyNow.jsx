import React from 'react';
import styled from 'styled-components';

const BuyNow = styled.button`
  width: inherit;
  min-width: inherit;
  height: 74px;
  position: fixed;
  text-transform: uppercase;
  font-family: AvenirNextBold;
  font-size: 20px;
  color: #fff;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  border: none;
  outline: none;
  position: fixed;
  bottom: 0px;
  &:hover{
    background-image: linear-gradient(to left, #4949aa, #27275d);
  }
  @media screen and (min-width: 768px){
    font-size: 32px;
    height: 115px;
  }
`;

export default () => <BuyNow>buy now</BuyNow>;
