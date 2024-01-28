// import React from 'react'
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { CgProfile } from "react-icons/cg";
import { IoHomeSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Header = () => {

  const { loginWithRedirect, isAuthenticated, logout, } = useAuth0();

  return (
    <nav className="menu">
      <h1>Instagram</h1>
      <Link to='/'>
        <IoHomeSharp title="Home" />
      </Link>
      {
        isAuthenticated ? (
          <Link to='/post'>
            <FaPlus title="Post" />
          </Link>
        ) : (
          <div></div>
        )
      }
      {
        isAuthenticated ? (
          <Link to='/profile'>
            <CgProfile title="Profile" />
          </Link>
        ) : (
          <div></div>
        )
      }


      {
        isAuthenticated ? (
          <button className="auth_btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            LOGOUT
          </button>
        ) : (

          <button className='auth_btn' onClick={() => loginWithRedirect()}>LOGIN</button>
        )
      }


    </nav>
  )
}

export default Header

