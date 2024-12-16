import React, { useRef, useState } from 'react'
import './SignInScreen.css'
import './SignUp.css'
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export default function SignUp() {
    const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  // for sign ups below code
  const register = (e) => {
    e.preventDefault();
    
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value).then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
          alert(error.message);
        })
  }

  return (
    <div>
       <div>
      <div className="signIn">        
        <form >
          <h1>Sign Up</h1>
          <input ref={emailRef} className='input' type="email" placeholder='Sign Up' />
          <input ref={passwordRef} className='input' type="password" placeholder='Password' />
          <button className='submit_btn' type="submit" onClick={register}>Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  )
}
