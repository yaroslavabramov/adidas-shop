import React, { Component } from 'react';


import './style.css'
import './css/normalize.css'
import './css/flexboxgrid.css'


import Sidebar from './Sidebar'
import HeaderRight from './item page/HeaderRight'
import HeaderLeft from './item page/HeaderLeft'
import PhotoGallery from './item page/PhotoGallery'
import Description from './item page/Description'
import BuyNow from './item page/BuyNow'

class App extends Component {
  render() {
    return (
      <body>
        <Sidebar />
        <main className="ultraboost">
          <header className="ultraboost-header">
            <HeaderLeft />
            <HeaderRight />
          </header>
          <PhotoGallery />
          <Description />
        <BuyNow />
        </main>
      </body>
    );
  }
}

export default App;
