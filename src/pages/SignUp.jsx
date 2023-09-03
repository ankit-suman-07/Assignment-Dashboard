import React, { useState } from 'react';
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
                    <button> <img src={GoogleIcon} /> Sign in with Google</button>
                    <button> <img src={AppleIcon} /> Sign in with Apple</button>
                </div>
                <div className='signup-box' >
                    <span>Email address</span>
                    <input type='email' />
                    <span>Password</span>
                    <input type='password' />
                    <a href='#' >Forgot password?</a>
                    <button className='signin-btn' >Sign In</button>
                </div>
                <div className='signup-register' >
                    <span>Don't have an account?</span> <a href='#' >Register here</a>
                </div>
            </div>
        </div>
    </div>
  )
}
