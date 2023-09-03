import React from 'react';
import { useEffect, useState } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        })
        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Signed Out");
            setAuthUser(null);
        }).catch(error => console.log(error))
    }

  return (
    <div>
        {
            authUser? <div><span>{authUser.email}</span> <button onClick={userSignOut} >Sign Out</button> </div> : <span>User Not Signed In</span>
        }
    </div>
  )
}
