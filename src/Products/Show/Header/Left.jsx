import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 15px;
  @media screen and (min-width: 768px){
    margin-left: 30px;
  }
`;

const Name = styled.h1`
  max-width: 300px;
  color: #393939;
  text-transform: uppercase;
  font-family: AvenirNextbold;
  font-size: 36px;
  line-height: 1;
  margin:0;
  @media screen and (min-width: 768px){
    font-size:64px;
  }
`;

const Save = styled.button`
  display: none;
  background-color: #e3e3e3;
  color: #fff;
  font-family: AvenirNextBold;
  font-size: 18px;
  text-transform: uppercase;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  outline: none;
  margin-top: 15px;
  &:hover{
    background-color: #b0bdfc;
  }
  @media screen and (min-width: 768px){
    display: block;
  }
`;

export default () => (
  <Wrapper>
    <Name>ultra boost</Name>
    <Save>save</Save>
  </Wrapper>
);
