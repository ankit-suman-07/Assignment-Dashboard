import React, { useState } from 'react';
import "../css/DataCard.css";
import Transaction from "../icons/transaction.png";

export const DataCard = () => {
  const val = 12345;
  return (
    <div className='datacard' >
      <div className='datacard-image-div' >
        <img src={Transaction} />
      </div>
      <span className='datacard-head-div' >
        Total Revenue
      </span>
      <span className='datacard-val-div' >
        {val}
      </span>
    </div>
  )
}
