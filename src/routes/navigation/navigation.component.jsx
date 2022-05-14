import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.component'
import { LogoLink, NavContainer } from './navigation.styles'

const Navigation = () => {
    return (
    //   if auth'd show authNavbar else show navbar
      <div>
        <NavContainer>
          <LogoLink to="/">Feems</LogoLink>
          <Navbar/>
        </NavContainer>
        
          <Outlet/>
    </div>
  )
}

export default Navigation