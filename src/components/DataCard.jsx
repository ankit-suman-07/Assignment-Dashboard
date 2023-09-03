import React, { useState } from 'react';
import "../css/DataCard.css";
import Transaction from "../icons/transaction.png";

export const DataCard = ({title, data, icon, color}) => {
  
  return (
    <div className='datacard' style={{ backgroundColor: color }} >
      <div className='datacard-image-div' >
        <img src={icon} />
      </div>
      <span className='datacard-head-div' >
        {title}
      </span>
      <span className='datacard-val-div' >
        {data}
      </span>
    </div>
  )
}
