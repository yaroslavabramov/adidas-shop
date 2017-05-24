import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import Itemimg1 from './images/bitmap.jpg';
import Itemimg2 from './images/bitmap1.jpg';
import Itemimg3 from './images/bitmap2.jpg';

import Card from './Card';

const GridWrapper = styled.div`
  box-sizing: border-box;
  margin: 18px 15px;
  @media screen and (min-width: 768px){
    margin: 24px 25px;
  }
`;

export default () => (
  <GridWrapper>
    <Row>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="170" photo={Itemimg1} isSale />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="240.99" photo={Itemimg2} />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="1024" photo={Itemimg3} />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="170" photo={Itemimg2} />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="170" photo={Itemimg3} isSale />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="170" photo={Itemimg1} />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="170" photo={Itemimg1} isSale />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card price="170" photo={Itemimg1} />
      </Col>
    </Row>
  </GridWrapper>
);
