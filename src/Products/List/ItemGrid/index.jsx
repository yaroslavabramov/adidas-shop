import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { get, imageLink } from '../../../api';
import Card from './Card';

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

  componentWillReciveProps(newProps) {
    this.fetchData(newProps);
  }

  fetchData(props) {
    get(`v1/${props.match.url}`).then(json => this.setState({ products: json.items }));
  }
  render() {
    return (
      <GridWrapper>
        <Row>
          {this.state.products.map(product => (
            <Col xs={12} sm={6} md={4}>
              <Card
                url={`${this.props.match.url}//${product.id}`}
                price={product.price}
                photo={imageLink(product.images[0], 256)}
                isSale="true"
              />
            </Col>
          ))}
        </Row>
      </GridWrapper>
    );
  }
}
