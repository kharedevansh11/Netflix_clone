import React, { useEffect } from 'react';
import ProfileScreen from './components/ProfileScreen';
import Homescreen from './components/Homescreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
 
} from "react-router-dom";
import Login from './components/Login';

import './App.css';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{

          if(userAuth)
          {
            // console.log(userAuth);
            //login
            dispatch(login({
              uid: userAuth.uid,
              email: userAuth.email,
            }));
          }
          else{
            //logout
              dispatch(logout());
          }
    });

    return unsubscribe;
  },[])

  return (
    <div className="app"> 
      <Router>
       {!user? (<Login/>) : (
       <Routes>
        <Route exact path='/' Component={Homescreen} />
          
          <Route
        exact path='/profile'
        Component={ProfileScreen}/>
       </Routes>)
              }
              
  

      </Router>

    </div>
  );
}

export default App;
