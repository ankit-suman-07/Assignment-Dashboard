import React from 'react'

export const UserRow = ({id, user}) => {
  return (
    <div className='user-row-comp' >
        <div className='user-row-div' >
            <span>{id}</span>
            
            <span>{user.username}</span>
            <span>{user.email}</span>
            {
          user.email === "" ? (
            <span>Guest</span>
          ) : (
            <span>User</span>
          )
        }
        </div>
    </div>
  )
}
