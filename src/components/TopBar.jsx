import React, { useContext } from 'react';
import { AuthContext, AuthDetails } from '../helper/AuthDetails';
import "../css/TopBar.css";
import Bell from "../icons/bell.png";
import Search from "../icons/search.png";
import LoginIcon from "../icons/login_icon.png";

export const TopBar = () => {

  

  const { loggedIn, userName, userEmail, userPhoto } = useContext(AuthContext);

  return (
    <AuthDetails>
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
          {
              loggedIn ? <img src={userPhoto} /> : <img src={LoginIcon} />
          }
          
        </div>
      </div>
        
    </div>
    </AuthDetails>
  )
}
