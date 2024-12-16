import React, { useState } from 'react'
import "./Login.css"
import "./SignInScreen"
import SignInScreen from './SignInScreen';
import logo from '../logo/logo.png'
function Login() {
  const [signIn,setSignIn] = useState(false);

  return (  
    <div className='login_screen'>
        < div className="login_screen_background">
               <img className='login_logo' src={logo} alt=""  />

               <button onClick={()=>{ setSignIn(true)}} className='login_screen_button'>Sign in</button>

               <div className="login_screen_gradient"/>
               {/*above line is just for giving that dark fading shade when going down */}

               <div className="login_screen_body">
                {signIn?(<SignInScreen/>): ( 
                     <>
                     <h1>Unlimited TV,Movies,webshow content and more.</h1>
                     <h2>Watch anywhere, cancel at anytime</h2>
                     <h3>Don't have an account? Sign up now</h3>
 
                     <div className="login_screen_input">
                       <form >
                         <input type="email" placeholder='Enter your email' />
 
                         <button
                           onClick={()=>{setSignIn(true)}}
                         className='sign_btn'>GET STARTED</button>
                       </form>
                     </div>
                   
                </>
                )}
               
               </div>
        </div>
    
    </div>
  )
}

export default Login
