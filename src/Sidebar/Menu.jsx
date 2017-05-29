import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Arrow from './images/group-2.svg';

const Nav = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 24px;
  margin-top: 125px;
  @media screen and (min-width: 768px){
    display: flex;
  }
`;

const Menu = styled(Link)`
  margin-top: 25px;
  margin-bottom: 5px;
  font-family: AvenirNextBold;
  color: ${props => (props.isActive ? '#fff' : '#3c3c3c')};
  margin-right: ${props => (props.isActive ? '10px' : '0')};
  ${props => props.isActive && `
    padding-right: 20px;
    margin-left: 10px;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: 100px 10px;
    margin-bottom: 15px;
  `};
  &:hover{
    color: #fff;
  };
`;

const SubMenu = styled(Link)`
  font-family: AndaleMono;
  margin-bottom: 25px;
  color: ${props => (props.isActive ? '#fff' : '#3c3c3c')};
  &:hover{
    color: #fff;
  }
`;

export default () => (
  <Nav>
    <Menu to="/item" isActive>sports</Menu>
    <SubMenu to="/item" isActive>shoes</SubMenu>
    <SubMenu to="/item">clothing</SubMenu>
    <SubMenu to="/item">accesories</SubMenu>
    <Menu to="/item">brands</Menu>
    <Menu to="/item">micoach</Menu>
  </Nav>
);