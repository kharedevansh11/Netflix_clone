import React, { useEffect, useState } from 'react'
import './Nav.css'
const Nav = () => {

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
      {/* <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"  /> */}
      <h1 className="nav_logo" style={{color:"Red"}}>METFLIX</h1>

        <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo" />

      </div>
    </div>
  )
}

export default Nav
