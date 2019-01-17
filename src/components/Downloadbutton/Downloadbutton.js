import React from 'react';
import './Downloadbutton.css';


export function Downloadbutton(props) {
    return (
      <div className="Downloadbutton">
        <button  className="download-button"><a className="text" href={props.url}>DOWNLOAD NOW -></a>  </button>      
      </div>
    );
  }

