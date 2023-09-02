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
      {
        UserDB.map((user, idx) => {
          return(
            <UserRow id={idx} user={user}  />
          );
        })
      }
      </div>
    </div>
  )
}
