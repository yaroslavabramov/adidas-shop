import React from 'react'

import './style.css'

import Arrow from './images/group-2.svg'

export default ()=> {
  return(
    <nav className="sidebar-menu">
      <a href="" className="menu-current">sports<img src={Arrow} alt="" /></a>
      <a href="" className="submenu-current">shoes</a>
      <a href="" className="submenu">clothing</a>
      <a href="" className="submenu">accesories</a>
      <a href="" className="menu">brands</a>
      <a href="" className="menu">micoach</a>
    </nav>
  );
};
