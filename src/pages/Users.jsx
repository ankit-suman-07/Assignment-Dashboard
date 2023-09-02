import React from 'react';
import { UserDB } from '../helper/UserDB';
import { UserRow } from '../components/UserRow';
import "../css/Users.css";

import { Sidebar } from '../components/Sidebar';

export const Users = () => {
  return (
    <div className='users-comp' >
      <Sidebar />
      
      
      <div className='users-div' >
      <div className='top-bar-head' >
      Users
      </div>
      <div className='user-row-comp' >
            <span className='user-id bold' >ID</span>
            
            <span className='user-name bold' >Username</span>
            <span className='user-email bold' >Email ID</span>
            <span className='user-type bold' >User Type</span>
    </div>
      <div className='user-table' >
      {
        UserDB.map((user, idx) => {
          return(
            <UserRow id={idx} user={user}  />
          );
        })
      }
      </div>
      
      </div>
    </div>
  )
}
