import {  } from "redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import AuthNavbar from "../../components/authNavbar/authNavbar.component";
import { LogoLink, NavContainer, Nav, Links, NavLink } from "./navigation.styles";
import { useSelector } from "react-redux";

const Navigation = () => {
  const auth = useSelector((state) => state.userSlice)

  return (
    //   if auth'd show authNavbar else show navbar
    <Nav>
      <NavContainer>
        <LogoLink to="/">Feems</LogoLink>
        <Links>
          <NavLink to="">Home</NavLink>
          <NavLink to="">Movies</NavLink>
          <NavLink to="">Tv Shows</NavLink>
        </Links>
        {auth.userData ? <AuthNavbar/> : <Navbar />}
      </NavContainer>
      <Outlet />
    </Nav>
  );
};

export default Navigation;
