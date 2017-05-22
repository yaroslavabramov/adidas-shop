import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import Itemimg_1 from './images/bitmap.jpg';
import Itemimg_2 from './images/bitmap1.jpg';
import Itemimg_3 from './images/bitmap2.jpg';

import Card from './Card';

const GridWrapper = styled.div`
  box-sizing: border-box;
  margin: 24px 25px;
`;

export default ()=> {
  return (
    <GridWrapper>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='170' photo={Itemimg_1} sale />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='240.99' photo={Itemimg_2} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='1024' photo={Itemimg_3} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='170' photo={Itemimg_2} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='170' photo={Itemimg_3} sale />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='170' photo={Itemimg_1} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='170' photo={Itemimg_1} sale />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} >
          <Card price='170' photo={Itemimg_1} />
        </Col>
      </Row>
    </GridWrapper>
  );
};
