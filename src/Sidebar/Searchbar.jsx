import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-top:144px;
  background-image: url(${require('./images/group.png')});
  background-repeat: no-repeat;
  background-position: 14px 0px;
  background-size: 28px 30px;
  margin-left: 22px;
  margin-right: 22px;
  padding-left: 60px;
  padding-top: 2px;
  padding-bottom: 12px;
  border-bottom: 4px solid #373737;
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

export default ()=> {
  return(
    <Form action="URL">
      <Input type="text" />
    </Form>
  );
};
