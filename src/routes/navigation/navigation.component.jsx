import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import AuthNavbar from "../../components/authNavbar/authNavbar.component";
import { LogoLink, NavContainer,Nav } from "./navigation.styles";

const Navigation = () => {
  const authed = false;
  return (
    //   if auth'd show authNavbar else show navbar
    <Nav>
      <NavContainer>
        <LogoLink to="/">Feems</LogoLink>
        {authed ? <AuthNavbar /> : <Navbar />}
      </NavContainer>

      <Outlet />
    </Nav>
  );
};

export default Navigation;
