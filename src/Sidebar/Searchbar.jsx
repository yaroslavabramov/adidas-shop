import React from 'react';
import styled from 'styled-components';
import Icon from './images/group.png';

const Form = styled.form`
  padding-left: 60px;
  padding-top: 2px;
  padding-bottom: 12px;
  border-bottom: 4px solid #373737;
  margin-top: 20px;
  background-image: url(${Icon});
  background-repeat: no-repeat;
  background-position: 14px 0px;
  background-size: 28px 30px;
  display: ${props => (props.isOpened ? 'block' : 'none')};
  @media screen and (min-width: 768px){
    margin-top: 144px;
    display: block;
  }
`;

const Input = styled.input`
  background:none;
  color: #fff;
  width: 100%;
  font-size: 24px;
  padding:0;
  margin:0;
  outline:none;
  border: none;
  -webkit-appearance: none;
`;

export default props => (
  <Form isOpened={props.isOpened} action="URL">
    <Input type="text" />
  </Form>
);
