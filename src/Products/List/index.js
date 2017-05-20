import React from 'react';

import './style.css'
import '../../css/normalize.css'
import '../../css/flexboxgrid.css'

import Itemimg_1 from './images/bitmap.jpg'
import Itemimg_2 from './images/bitmap1.jpg'
import Itemimg_3 from './images/bitmap2.jpg'

import Sidebar from '../../Sidebar'
import Toppanel from './TopPanel'
import Card from './Card'

export default ()=> {
  return (
    <body>
      <Sidebar />
      <main className="shoes">
        <Toppanel />
        <section className="catalog">
          <div className="row">
            <Card />
            <div className="col-4">
              <img className="item-image" src={Itemimg_2} alt="item-img" />
              <a href="" className="item-price">$240.99</a>
            </div>
            <div className="col-4">
              <img className="item-image" src={Itemimg_1} alt="item-img" />
              <a href="" className="item-price">$1024</a>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img className="item-image" src={Itemimg_2} alt="item-img" />
              <a href="" className="item-price-sale">$170</a>
            </div>
            <div className="col-4">
              <span className="sale">sale</span>
              <img className="item-image" src={Itemimg_3} alt="item-img" />
              <a href="" className="item-price-sale">$170</a>
            </div>
            <div className="col-4">
              <img className="item-image" src={Itemimg_1} alt="item-img" />
              <a href="" className="item-price">$170 </a>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};
