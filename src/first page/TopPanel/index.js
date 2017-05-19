import React from 'react'

import './style.css'


export default ()=> {
  return(
    <div className="top-panel">
      <div className="top-panel-icon"></div>
      <div className="top-panel-sex">
        <button className="sex-current">man</button>
        <button className="sex">woman</button>
      </div>
      <span className="size">size</span>
      <div className="size-buttons">
        <button className="size-button">36</button>
        <button className="size-button">37</button>
        <button className="size-button">38</button>
        <button className="size-button">39</button>
        <button className="size-button">40</button>
        <button className="size-button-current">41</button>
        <button className="size-button">42</button>
      </div>
    </div>
  );
};
