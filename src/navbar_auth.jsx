import React from 'react'
import "./navbar_auth.css"
import logo from "./logo.png";

const NavbarAuth = () => {

  return (
    <>

<nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
        <div className="navbar_auth_right">
      <button className='active'>Register</button>
      <button >Login</button>
        </div>
      </nav>

    </>
  )
}

export default NavbarAuth