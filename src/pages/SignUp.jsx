import React, { useState } from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth, googleAuth } from "../helper/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { AuthDetails } from '../helper/AuthDetails';

import "../css/SignUp.css";
import AppleIcon from "../icons/apple.png";
import GoogleIcon from "../icons/google.png";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const googleSignUp = () => {
        signInWithPopup(auth, googleAuth).then((data) => {
            setEmail(data.user.email);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
  return (
    <div className='sugnup-comp' >
        <div className='signup-logo' >
            Board.
        </div>
        <div className='signup-auth' >
            <div className='signup-border' >
                <div className='signup-head' >
                    Sign In
                </div>
                <div className='signup-instruction' >
                    Sign in to you account
                </div>
                <div className='signup-btn' >
                    <button type='submit' onClick={googleSignUp} > <img src={GoogleIcon} /> Sign in with Google</button>
                    <button> <img src={AppleIcon} /> Sign in with Apple</button>
                </div>
                    <form onSubmit={signIn} className='signup-box' >
                        <span>Email address</span>
                        <input 
                            type='email' 
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span>Password</span>
                        <input 
                            type='password' 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href='#' >Forgot password?</a>
                        <button type='submit' className='signin-btn' >Sign In</button>
                    </form>
                
                <div className='signup-register' >
                    <span>Don't have an account?</span> <a href='#' >Register here</a>
                </div>
            </div>
        </div>
        <AuthDetails />
    </div>
  )
}
