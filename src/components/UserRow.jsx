import React from 'react';
import "../css/UserRow.css";

export const UserRow = ({id, user}) => {
  return (
    <div className='user-row-comp' >
            <span className='user-id' >{id}</span>
            
            <span className='user-name' >{user.username}</span>
            <span className='user-email' >{user.email}</span>
            {
                user.email === "" ? (
                    <span className='user-type' >Guest</span>
                ) : (
                    <span className='user-type' >User</span>
                )
            }
    </div>
  )
}
