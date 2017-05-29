import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';


const Nav = styled.nav`
  display: ${props => (props.isOpened ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 24px;
  @media screen and (min-width: 768px){
    margin-top: 125px;
    display: flex;
  }
`;

const Link = styled(NavLink)`
  transition: all 0.2s;
  font-family: AndaleMono;
  margin-bottom: 25px;
  color: #3c3c3c;
  &:hover{
    color: #fff;
  }
  &.active{
    color: #fff;
  }
`;

export default props => (
  <Nav isOpened={props.isOpened} >
    <Menu title="football" >
      <Link to="/products/football/shoes">shoes</Link>
      <Link to="/products/football/clothing">clothing</Link>
      <Link to="/products/football/accesories">accesories</Link>
    </Menu>
    <Menu title="running" >
      <Link to="/products/running/shoes">shoes</Link>
      <Link to="/products/running/clothing">clothing</Link>
      <Link to="/products/running/accesories">accesories</Link>
    </Menu>
    <Menu title="basketball" >
      <Link to="/products/basketball/shoes">shoes</Link>
      <Link to="/products/basketball/clothing">clothing</Link>
      <Link to="/products/basketball/accesories">accesories</Link>
    </Menu>
  </Nav>
);
