import React, { useRef } from 'react'
import './SignInScreen.css'
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // for sign ups below code
  const register = (e) => {
    e.preventDefault();
    
      createUserWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value).then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
          alert(error.message);
        })
  }

  // for signin below code
  const sign_in = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value).then((authUser)=>{
          console.log(authUser);
        }).catch((error)=>{
          alert(error.message);
        })


  }

  return (
    <div>
      <div className="signIn">
        <form >
          <h1>Sign In</h1>
          <input ref={emailRef} className='input' type="email" placeholder='Sign In' />
          <input ref={passwordRef} className='input' type="password" placeholder='Password' />
          <button className='submit_btn' type="submit" onClick={sign_in}>Sign In</button>
          <h4> <span className='new_netflix'>New to Netflix? </span>
            <span className='sign_up' onClick={register}>Sign up now</span>
          </h4>
        </form>
      </div>
    </div>
  )
}

export default SignInScreen
