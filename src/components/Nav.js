import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate} from "react-router-dom";
import logo from "../logo/logo.png"
const Nav = () => {
    const navigate = useNavigate();
  const [show,setShow] = useState(false);

  const transitionShow = ()=>{
      if(window.scrollY >100)
      {
        setShow(true);                              //this part is for that transition of navbar, when its scroll down only then the black part of navbar appears;
      }
      else{
        setShow(false);
      }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionShow);

},[])

  return (

    <div className= {`nav ${show===true && `nav_black`}`}>
      <div className="nav_content">
      <img onClick={()=> navigate("/")}
      className='nav_logo' src={logo} alt="logo"  />
      

        <img onClick={() => navigate("/profile")}
        className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo" />

      </div>
    </div>
  )
}

export default Nav
