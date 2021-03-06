import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderRight from './Header/Right';
import HeaderLeft from './Header/Left';
import PhotoGallery from './PhotoGallery';
import Description from './Description';
import BuyNow from './BuyNow';
import { get } from '../../api';

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
      width: 66%;
  }
  @media screen and (min-width: 992px){
      min-width: calc(100% - 414px);
  }
`;

const Header = styled.header`
  width: 100%;
  min-width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
  @media screen and (min-width: 992px){
    width: inherit;
    position: absolute;
  }
`;

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      product: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps);
  }

  handleClick(currentIndex) {
    this.setState({ currentIndex });
  }

  fetchData(props) {
    get(`v1/${props.match.url}`).then(product => this.setState({ product }));
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <HeaderLeft
            color={colors[this.state.currentIndex]}
            title={this.state.product.title}
          />
          <HeaderRight
            price={this.state.product.price}
            currency={this.state.product.currency}
            colors={colors}
            handleClick={this.handleClick}
            currentIndex={this.state.currentIndex}
          />
        </Header>
        <PhotoGallery
          images={this.state.product.images}
        />
        <Description content={this.state.product.description} />
        <BuyNow />
      </Wrapper>
    );
  }
}
