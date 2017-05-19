import React from 'react'



import './style.css'


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
