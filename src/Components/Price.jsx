import React from 'react';

export default ({ price, currency }) => {
  const correctPrice = price / 100;
  const priceWithSign = {
    USD: `$${correctPrice}`,
    EUR: `€${correctPrice}`,
    RUB: `${correctPrice}₽`,
  };
  return <span>{priceWithSign[currency]}</span>;
};
