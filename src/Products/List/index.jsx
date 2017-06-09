import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { get, imageLink } from '../../api';
import Card from './ItemGrid/Card';
import TopPanel from './TopPanel';
import priceTransform from '../../Components/functions';

const Wrapper = styled.main`
  width: 100%;
  @media screen and (min-width: 768px){
      width: calc(100% - 327px);
  }
  @media screen and (min-width: 992px){
      width: calc(100% - 414px);
  }
`;

const GridWrapper = styled.div`
  box-sizing: border-box;
  margin: 18px 15px;
  @media screen and (min-width: 768px){
    margin: 24px 25px;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  fetchData(props) {
    get(`v1/${props.match.url}`).then(json => this.setState({ products: json.items }));
  }
  render() {
    return (
      <Wrapper>
        <TopPanel />
        <GridWrapper>
          <Row>
            {this.state.products.map(product => (
              <Col xs={12} sm={6} md={4}>
                <Card
                  url={`${this.props.match.url}/${product.id}`}
                  price={priceTransform(product.price, product.currency)}
                  photo={imageLink(product.images[0], 512)}
                  isSale="true"
                />
              </Col>
            ))}
          </Row>
        </GridWrapper>
      </Wrapper>
    );
  }
}
