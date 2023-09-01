import React, { useState } from 'react';
import "../css/DataCard.css";

export const DataCard = () => {
  const val = 12345;
  return (
    <div className='datacard' >
        Title
        {val}
        Icon
    </div>
  )
}
