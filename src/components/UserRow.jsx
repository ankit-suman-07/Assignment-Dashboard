import React from 'react';
import "../css/UserRow.css";
import UserIcon from "../icons/login_icon.png";

export const UserRow = ({id, user}) => {
  return (
    <div className='user-row-comp' >
            <span className='user-id' >{id}</span>
            
            <span className='user-name' >{user.username}</span>
            <span className='user-email' >{user.email}</span>
            {
                user.email === "" ? (
                  <>
                    <span className='user-type' >Guest</span>
                    <span className='user-photo' > <img src={UserIcon} /> </span>
                  </>
                ) : (
                  <>
                    <span className='user-type' >User</span>
                    <span className='user-photo' > <img src={user.img} /> </span>
                  </>
                )
            }
    </div>
  )
}
