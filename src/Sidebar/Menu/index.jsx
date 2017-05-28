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
`;

export default props => (
  <Nav isOpened={props.isOpened} >
    <Menu title="football" to="/">
      <Link to="/">shoes</Link>
      <Link to="/">clothing</Link>
      <Link to="/">accesories</Link>
    </Menu>
    <Menu title="running" to="/">
      <Link to="/">shoes</Link>
      <Link to="/">clothing</Link>
      <Link to="/">accesories</Link>
    </Menu>
    <Menu title="basketball" to="/">
      <Link to="/">shoes</Link>
      <Link to="/">clothing</Link>
      <Link to="/">accesories</Link>
    </Menu>
  </Nav>
);
