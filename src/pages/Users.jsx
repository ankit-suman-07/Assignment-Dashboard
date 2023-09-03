import { React, useState } from 'react';
import { UserDB } from '../helper/UserDB';
import { UserRow } from '../components/UserRow';
import "../css/Users.css";

import { Sidebar } from '../components/Sidebar';

export const Users = () => {

  const [sortArray, setSortedArray] = useState(UserDB);

  const sortAscendingAlpha = () => {
    const sortedData = [...UserDB].sort((a, b) => a.username.localeCompare(b.username));
    setSortedArray(sortedData);
  };

  const sortDescendingAlpha = () => {
    const sortedData = [...UserDB].sort((a, b) => b.username.localeCompare(a.username));
    setSortedArray(sortedData);
  };


  return (
    <div className='users-comp' >
      <Sidebar />
      
      
      <div className='users-div' >
      <div className='top-bar-head' >
      Users
      </div>
      <div className='users-sort' >
          <button onClick={sortAscendingAlpha} >A-Z &uarr;</button>
          <button onClick={sortDescendingAlpha} >Z-A &darr;</button>
      </div>
      <div className='user-row-comp' >
            <span className='user-id bold' >ID</span>
            
            <span className='user-name bold' >Username</span>
            <span className='user-email bold' >Email ID</span>
            <span className='user-type bold' >User Type</span>
            <span className='user-type bold' >Image</span>
    </div>
      <div className='user-table' >
      {
        sortArray.map((user, idx) => {
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
