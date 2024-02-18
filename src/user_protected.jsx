import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const UserProtected = (props) => {
const navigate = useNavigate()
    const {Component} = props
    useEffect(() => {
      const isLogin = localStorage.getItem("userInfo");

      if (!isLogin) {
        navigate("/user-register");
      }
    }, []); 
  
  return (
    <>
    <Component/>
    </>
  )
}

export default UserProtected