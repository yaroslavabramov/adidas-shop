import React from 'react'

import './style.css'

import Linkimg_1 from './images/link1.jpg'
import Linkimg_2 from './images/link2.jpg'
import Linkimg_3 from './images/link3.jpg'
import Linkimg_4 from './images/link4.jpg'
import Itemphoto from './images/bitmap1@3x.jpg'

export default ()=> {
  return(
    <div className="photos">
      <div className="photo-main">
        <img className="photo-main-img" src={Itemphoto} alt='item img' />
      </div>
      <div className="photo-menu">
        <div className="photo-menu-buttons">
          <button className="photo-button"><img class="photo-link" src={Linkimg_1} alt='' /></button>
          <button className="photo-button"><img class="photo-link" src={Linkimg_2} alt='' /></button>
          <button className="photo-button"><img class="photo-link" src={Linkimg_3} alt='' /></button>
          <button className="photo-button-current"><img class="photo-link-current" src={Linkimg_4} alt='' /></button>
        </div>
        <div className="lines">
          <hr className="line" />
          <hr className="line" />
          <hr className="line" />
        </div>
        <button className="see-more-button">see more photos</button>
      </div>
    </div>
  );
};
