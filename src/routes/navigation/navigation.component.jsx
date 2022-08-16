import {  } from "redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import AuthNavbar from "../../components/authNavbar/authNavbar.component";
import { LogoLink, NavContainer, Links, NavLink } from "./navigation.styles";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  const auth = useSelector((state) => state.userSlice)

  return (
   
    <>
      <NavContainer>
        <LogoLink to="/">Feems</LogoLink>
       {auth.status === "authed" ? <Links>
          <NavLink to="">Home</NavLink>
          <NavLink to="userlist">My List</NavLink>
          <NavLink to="">Tv Shows</NavLink>
        </Links> : ""}
        {auth.status === "authed" ? <AuthNavbar/> : <Navbar />}
      </NavContainer>
    
        <Outlet />
        <Footer/>

    </>
  );
};

export default Navigation;
