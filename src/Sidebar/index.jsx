import React, { Component } from 'react';
import styled from 'styled-components';

import Searchbar from './Searchbar';
import Menu from './Menu';
import Logo from './images/logo.png';
import Burger from './images/burger.svg';

const Wrapper = styled.aside`
  box-sizing: border-box;
  margin:0;
  padding: 0 14px;
  width: 100%;
  min-height: 64px;
  background-color: #0e0e0e;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 50px auto;
  background-position: 10px 17px;
  text-align: right;
  @media screen and (min-width: 768px){
    padding: 0 22px;
    width: 327px;
    background-position: center 50px;
    background-size: 77px auto;
    min-height: 1171px;
  }
  @media screen and (min-width: 992px){
    width: 414px;
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
        <BurgerButton onClick={this.handleClick} ><img src={Burger} alt="" /></BurgerButton>
        <Searchbar isOpened={this.state.isOpened} />
        <Menu isOpened={this.state.isOpened} />
      </Wrapper>
    );
  }
}
