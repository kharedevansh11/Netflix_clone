  import React, { useRef, useState } from 'react'
  import './SignInScreen.css'
  import { auth } from '../firebase';
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
  import SignUp from './SignUp';
  function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [signUp,setsignUp] = useState(false);


    // for signin below code
    const sign_in = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,
          emailRef.current.value,
          passwordRef.current.value).then((authUser)=>{
            // console.log(authUser);
          }).catch((error)=>{
            alert(error.message);
          })


    }

    return (
      <div>
        <div className="signIn">
            {signUp? (<SignUp/>):(
              <>
                  <form >
            <h1>Sign In</h1>
            <input ref={emailRef} className='input' type="email" placeholder='Sign In' />
            <input ref={passwordRef} className='input' type="password" placeholder='Password' />
            <button className='submit_btn' type="submit" onClick={sign_in}>Sign In</button>
            <h4> <span className='new_netflix'>New to Netflix? </span>
              <span className='sign_up' onClick={()=>{setsignUp(true)}}>Sign up now</span>
            </h4>
          </form>
              </>
            )}
      
        </div>
      </div>
    )
  }

  export default SignInScreen
