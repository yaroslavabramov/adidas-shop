import React, { Component } from 'react';
import styled from 'styled-components';
import Photobar from './Photobar';
import getImageLink from '../../../Components/ImageLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;

const Current = styled.img`
  margin-top: 30px;
  max-width: 100%;
  height: auto;
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
    const { images } = this.props;
    return (
      <Wrapper>
        <Current
          src={images ? getImageLink(images[this.state.currentIndex], 512) : null}
          alt="item img"
        />
        <Photobar
          images={images}
          handleClick={this.handleClick}
          currentIndex={this.state.currentIndex}
        />
      </Wrapper>
    );
  }
}
