import React, { Component } from 'react';


import './style.css'
import '../../css/normalize.css'
import '../../css/flexboxgrid.css'


import Sidebar from '../../Sidebar'
import HeaderRight from './HeaderRight'
import HeaderLeft from './HeaderLeft'
import PhotoGallery from './PhotoGallery'
import Description from './Description'
import BuyNow from './BuyNow'

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
