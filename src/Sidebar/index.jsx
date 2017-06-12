import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Logo from './images/logo@2x.png';
import Burger from './images/burger.svg';

const Wrapper = styled.aside`
  z-index: 1;
  box-sizing: border-box;
  margin:0;
  padding: 0 14px;
  width: 100%;
  min-height: 64px;
  background-color: #0e0e0e;
  @media screen and (min-width: 768px){
    padding: 0 22px;
    width: 34%;
    max-width: 327px;
    min-height: 1171px;
  }
  @media screen and (min-width: 992px){
    max-width: 414px;
  }
`;

const Header = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    width: 100%;
    justify-content: center;
  }
`;

const LogoLink = styled(Link)`
  margin-top: 17px;
  width: 45px;
  height: 30px;
  background: none;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 45px auto;
  background-position: 0 0;
  @media screen and (min-width: 768px){
    margin-top: 47px;
    width: 80px;
    height: 54px;
    background-size: 80px auto;
  }
`;

const BurgerButton = styled.button`
  background: none;
  padding:0;
  margin-top: 17px;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <LogoLink to="/products/football/cleats" />
          <BurgerButton onClick={this.handleClick} ><img src={Burger} alt="" /></BurgerButton>
        </Header>
        <Menu isOpened={this.state.isOpened} />
      </Wrapper>
    );
  }
}
