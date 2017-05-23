import React from 'react';
import styled from 'styled-components';
import Sale from '../../../Components/SaleLabel';

const Wrapper = styled.div`
  margin-right: 30px;
`;

const ColorMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Color = styled.button`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  outline: none;
  border: none;
  margin-left: 13px;
  background-color: ${props => props.color};
`;

const Price = styled.h2`
  text-align: right;
  height: 109px;
  font-family: AvenirNextBold;
  font-size: 80px;
  color: #e3e3e3;
  margin-top: 20px;
  border: none;
  outline: none;
`;

const Label = styled.span`
  margin-left: 30px;
`;

export default () => (
  <Wrapper>
    <ColorMenu>
      <Color color="#c5c5c5" />
      <Color color="#4d87ca" />
      <Color color="#4a4a4a" />
      <Color color="#e0e0e0" />
      <Label><Sale /></Label>
    </ColorMenu>
    <Price>170$</Price>
  </Wrapper>
);
