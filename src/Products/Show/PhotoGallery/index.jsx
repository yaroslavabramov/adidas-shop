import React, { Component } from 'react';
import styled from 'styled-components';
import Photobar from './Photobar';
import Linkimg1 from './images/link1@3x.jpg';
import Linkimg2 from './images/link2@3x.jpg';
import Linkimg3 from './images/link3@3x.jpg';
import Linkimg4 from './images/bitmap1@3x.jpg';

const Images = [
  Linkimg1,
  Linkimg2,
  Linkimg3,
  Linkimg4,
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
    this.showPhoto = this.showPhoto.bind(this);
  }

  showPhoto(currentIndex) {
    this.setState({ currentIndex });
  }

  render() {
    return (
      <Wrapper>
        <Current src={Images[this.state.currentIndex]} alt="item img" />
        <Photobar
          images={Images}
          showPhoto={this.showPhoto}
          currentIndex={this.state.currentIndex}
        />
      </Wrapper>
    );
  }
}
