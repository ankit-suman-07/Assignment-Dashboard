import React from 'react';
import "../css/TopBar.css";
import Bell from "../icons/bell.png";
import Search from "../icons/search.png";
import Profile from "../icons/profile.jpg";

export const TopBar = () => {
  return (
    <div className='top-bar-comp' >
      <div className='top-bar-head' >
        Dashboard
      </div>
      <div className='top-bar-profile' >
        <div className='search-bar' >
          <input type='text' placeholder='Search' className='search-text' />
          <img src={Search} className='search-icon' />
        </div>
        <div className='top-bar-bell' >
          <img src={Bell} />
        </div>
        <div className='top-bar-id' >
          <img src={Profile} />
        </div>
      </div>
        
    </div>
  )
}
