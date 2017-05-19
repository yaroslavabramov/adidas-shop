import React from 'react'
import Searchbar from './Searchbar'
import Menu from './Menu'


import './style.css'


export default ()=> {
  return(
    <aside className="sidebar">
      <Searchbar />
      <Menu />
    </aside>
  );
};
