import React from 'react'
import Cookies from 'js-cookie'
import {Outlet , Navigate} from 'react-router-dom'

function PrivateRoutes() {
    const Token = Cookies.get("token")
  return (
    Token ? <Outlet/> : <Navigate to = "/login"/>
    
  )   
  
}

export default PrivateRoutes