import React from 'react';
import styled from 'styled-components';
import Logo from './images/group.png';

const Wrapper = styled.div`
  margin-top:144px;
  margin-left: 22px;
  margin-right: 22px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: 14px 0px;
  background-size: 28px 30px;
`;

const Form = styled.form`
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

export default () => (
  <Wrapper>
    <Form action="URL">
      <Input type="text" />
    </Form>
  </Wrapper>
);
