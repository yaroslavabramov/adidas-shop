import React from 'react';
import styled from 'styled-components';

const BuyNow = styled.button`
  width: inherit;
  height: 115px;
  position: fixed;
  text-transform: uppercase;
  font-family: AvenirNextBold;
  font-size: 32px;
  color: #fff;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  border: none;
  outline: none;
  position: fixed;
  bottom: 0px;
  &:hover{
    background-image: linear-gradient(to left, #4949aa, #27275d);
  }
`;

export default () => <BuyNow>buy now</BuyNow>;
