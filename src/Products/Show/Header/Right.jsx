import React from 'react';
import styled from 'styled-components';
import Sale from '../../../Components/SaleLabel';

const Wrapper = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px){
    flex-direction: column;
    margin-right: 30px;
  }
`;

const TopRow = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const ColorMenu = styled.span`
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
  margin: 0px 0 15px 15px;
  text-align: left;
  font-family: AvenirNextBold;
  font-size: 80px;
  height: 80px;
  color: ${props => props.color};
  border: none;
  outline: none;
  @media screen and (min-width: 768px){
    flex-direction: row;
    height: 109px;
    margin-top: 20px;
    text-align: right;
  }
`;

const Label = styled.span`
  margin-left: 15px;
  @media screen and (min-width: 768px){
    margin-left: 30px;
  }
`;

export default props => (
  <Wrapper>
    <TopRow>
      <ColorMenu>
        {props.colors.map((color, i) => (
          <Color
            color={color}
            onClick={() => props.handleClick(i)}
          />
        ))}
      </ColorMenu>
      <Label><Sale /></Label>
    </TopRow>
    <Price color={props.colors[props.currentIndex]}>{props.price}</Price>
  </Wrapper>
);
