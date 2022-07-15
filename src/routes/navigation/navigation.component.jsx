import {  } from "redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import AuthNavbar from "../../components/authNavbar/authNavbar.component";
import { LogoLink, NavContainer, Nav } from "./navigation.styles";
import { useSelector } from "react-redux";

const Navigation = () => {
  const authed = useSelector((state) => state.userSlice.userData.user);

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
