import React from 'react'

import './style.css'

import Itemimg from './images/bitmap1.jpg'

import Sale_label from '../SaleLabel'

export default ()=> {
  return(
    <div className="col-4">
      <Sale_label />
      <img className="item-image" src={Itemimg} alt="item-img" />
      <a href="#" className="item-price-sale">$170</a>
    </div>
  );
};
