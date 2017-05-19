import React from 'react'


import '../css/menu.css'
import '../css/style.css'
import '../css/normalize.css'
import '../css/flexboxgrid.css'


export default ()=> {
  return(
    <div className="searchbar">
      <form action="URL">
        <div className="searchbar-input">
          <input type="text" name="searchbar" className="searchbar-input-line" />
        </div>
      </form>
    </div>
  );
};
