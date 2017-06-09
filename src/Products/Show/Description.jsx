import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  margin: 27px 30px 115px 30px;
  font-family: AvenirNextReg;
  font-size: 20px;
  color: #d8d8d8;
  line-height: 28px;
  padding: 0;
  @media screen and (min-width: 768px){
    font-size: 33px;
    line-height: 1.52;
  }
`;

export default props => (
  <Description>{props.content}</Description>
);
