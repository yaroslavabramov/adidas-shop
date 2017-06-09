import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 15px;
  @media screen and (min-width: 768px){
    margin-left: 30px;
    margin-right: 100px;
  }
`;

const Name = styled.h1`
  max-width: 300px;
  color: #393939;
  text-transform: uppercase;
  font-family: AvenirNextBold;
  font-size: 36px;
  line-height: 1;
  margin:0;
  @media screen and (min-width: 768px){
    font-size:64px;
  }
`;

const Save = styled.button`
  display: none;
  background-color: ${props => props.color};
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
  @media screen and (min-width: 768px){
    display: block;
  }
`;

export default props => (
  <Wrapper>
    <Name>{props.title}</Name>
    <Save color={props.color} >save</Save>
  </Wrapper>
);
