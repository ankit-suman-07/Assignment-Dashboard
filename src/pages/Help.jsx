import React from 'react';
import "../css/Help.css";

import { Sidebar } from '../components/Sidebar';

export const Help = () => {
  return (
    <div className='help-comp' >
      <Sidebar />
      <div  className='help-div' >
      <div className='top-bar-head' >
        Help
      </div>
      </div>

    </div>
  )
}
