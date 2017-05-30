import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from '../images/group-2.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 25px;
  margin-bottom: ${props => (props.isActive ? '25px' : '5px')};
  font-family: AvenirNextBold
  color: #fff;
  background: none;
  position: relative;
  &:after {
    margin-left: 10px;
    position: absolute;
    top: 12px;
    content: '';
    width: 14px;
    height: 9px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    transition: all 0.2s;
    ${props => props.isActive && `
      transform: rotate(-180deg);
    `
    }
  }
`;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleClick} isActive={this.state.isActive} >
          {this.props.title}
        </Button>
        {this.state.isActive && this.props.children}
      </Wrapper>
    );
  }
}
