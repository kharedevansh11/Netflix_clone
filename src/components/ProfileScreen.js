import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import "./ProfileScreen.css"
import Homescreen from './Homescreen';
import { useNavigate } from 'react-router-dom';
function ProfileScreen() {
    const userDetails = useSelector(selectUser);
    const close  = useNavigate();
    
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreenBody">
                <h1 className='edit'> Edit profile</h1>
                <div className="profileInfo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                    <div className="profileDetails">
                        <h2>{userDetails.email}</h2>
                        <div className="profile_panel">
                            <h1>Plans</h1>
                            <div className="profile_panel_details">
                                <div className="payments">
                                    <h4>Premium (4K + HDR) </h4>
                                    <button className='subs_btn'>Subscribe</button>
                                </div>
                                <div className="payments">
                                    <h4>Standard (1080p)</h4>
                                    <button className='subs_btn'>Subscribe</button>
                                </div>
                                <div className="payments">
                                    <h4>Basic (720p)</h4>
                                    <button className='subs_btn'>Subscribe</button>
                                </div>
                                
                            </div>  

                            <button className='profile_signout_btn' onClick={() => auth.signOut()}>Sign out</button>

                             <button className='close_btn' onClick={()=>{close("/")}}>Close</button>
                  
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProfileScreen
