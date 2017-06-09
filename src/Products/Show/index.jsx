import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderRight from './Header/Right';
import HeaderLeft from './Header/Left';
import PhotoGallery from './PhotoGallery';
import Description from './Description';
import BuyNow from './BuyNow';
import { get } from '../../api';
import priceTransform from '../../Components/functions';

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
  width: inherit;
  min-width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  @media screen and (min-width: 768px){
    flex-direction: row;
    position: absolute;
  }
  @media screen and (min-wiidth: 992px){
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

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  handleClick(currentIndex) {
    this.setState({ currentIndex });
  }

  fetchData(props) {
    get(`v1/${props.match.url}`).then(json => this.setState({ product: json }));
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
            price={priceTransform(this.state.product.price, this.state.product.currency)}
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
