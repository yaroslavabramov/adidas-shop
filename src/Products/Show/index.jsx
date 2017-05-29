import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderRight from './Header/Right';
import HeaderLeft from './Header/Left';
import PhotoGallery from './PhotoGallery';
import Description from './Description';
import BuyNow from './BuyNow';

const colors = [
  '#c5c5c5',
  '#4d87ca',
  '#4a4a4a',
  '#e0e0e0',
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  @media screen and (min-width: 768px){
      width: calc(100% - 327px);
  }
  @media screen and (min-width: 992px){
      width: calc(100% - 414px);
  }
`;

const Header = styled.header`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (min-width: 768px){
    flex-direction: row;
    position: absolute;
  }
`;

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(currentIndex) {
    this.setState({ currentIndex });
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <HeaderLeft color={colors[this.state.currentIndex]} />
          <HeaderRight
            colors={colors}
            changeColor={this.changeColor}
            currentIndex={this.state.currentIndex}
          />
        </Header>
        <PhotoGallery />
        <Description />
        <BuyNow />
      </Wrapper>
    );
  }
}
