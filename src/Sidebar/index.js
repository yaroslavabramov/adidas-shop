import React from 'react'
import Searchbar from './Searchbar'
import Menu from './Menu'


import '../css/menu.css'
import '../css/style.css'
import '../css/normalize.css'
import '../css/flexboxgrid.css'


export default ()=> {
  return(
    <aside className="sidebar">
      <Searchbar />
      <Menu />
    </aside>
  );
};
