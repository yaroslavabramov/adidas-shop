import React from 'react'

import './style.css'

import SaleLabel from '../../SaleLabel'

export default ()=> {
  return(
      <div className="header-rightcol">
        <div className="color-selection">
          <button clasNames="color-grey"></button>
          <button className="color-blue"></button>
          <button className="color-black"></button>
          <button className="color-white"></button>
          <SaleLabel />
        </div>
        <h2 className="item-price">170$</h2>
      </div>
  );
};
