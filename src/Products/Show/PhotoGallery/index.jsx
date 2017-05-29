import React, { Component } from 'react';
import styled from 'styled-components';
import Photobar from './Photobar';
import linkimg1 from './images/link1@3x.jpg';
import linkimg2 from './images/link2@3x.jpg';
import linkimg3 from './images/link3@3x.jpg';
import linkimg4 from './images/bitmap1@3x.jpg';

const images = [
  linkimg1,
  linkimg2,
  linkimg3,
  linkimg4,
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;

const Current = styled.img`
  margin-top: 30px;
  max-width: 804px;
  width: 100%;
`;

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentIndex) {
    this.setState({ currentIndex });
  }

  render() {
    return (
      <Wrapper>
        <Current src={images[this.state.currentIndex]} alt="item img" />
        <Photobar
          images={images}
          handleClick={this.handleClick}
          currentIndex={this.state.currentIndex}
        />
      </Wrapper>
    );
  }
}
