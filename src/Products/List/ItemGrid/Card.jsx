import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SaleLabel from '../../../Components/SaleLabel';

const CardWrapper = styled.div`
  padding: 9px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f4f4f4;
  margin-bottom: 24px;
`;

const Photo = styled.img`
  display: flex;
  margin: 0;
  width: 100%;
`;

const Price = styled(Link)`
  padding: 30px 0;
  font-size: 30px;
  font-family: AvenirNextBold;
  text-transform: uppercase;
  text-align: center;
  border: none;
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.isSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
  color: ${props => (props.isSale ? '#fff' : '#111')};
`;

const Label = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
`;

function Card({ url, price, photo, isSale }) {
  return (
    <CardWrapper>
      {isSale && <Label><SaleLabel /></Label>}
      <Photo src={photo} alt="item-img" />
      <Price to={url} isSale={isSale}>{price}</Price>
    </CardWrapper>
  );
}

Card.propTypes = {
  price: PropTypes.string.isRequired,
  photo: PropTypes.element.isRequired,
  isSale: PropTypes.bool,
};

Card.defaultProps = {
  isSale: false,
};

export default Card;
