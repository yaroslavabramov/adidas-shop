import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 30px;
`;

const Name = styled.h1`
  width: 226px;
  color: #393939;
  text-transform: uppercase;
  font-family: AvenirNextbold;
  font-size:64px;
  line-height: 1;
  margin:0;
`;

const Save = styled.button`
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
`;

export default ()=> {
  return(
      <Wrapper>
        <Name>ultra boost</Name>
        <Save>save</Save>
      </Wrapper>
  );
};
