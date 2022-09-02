import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import AuthNavbar from "../../components/authNavbar/authNavbar.component";
import { LogoLink, NavContainer, Links, NavLink } from "./navigation.styles";
import Footer from "../../components/footer/footer.component";
import { useAppSelector } from "../../utilities/hooks/rootstate";
import LoadingModal from "../../components/loading-modal/LoadingModal.component";
import ConfettiSpray from "../../utilities/confetti";

const Navigation = () => {
  const auth = useAppSelector((state) => state.userSlice)

  return (
    <>
      {auth.confetti && <ConfettiSpray />}
      {(auth.status === 'authing' || auth.loading === true) && <LoadingModal message="We are working on it..." />}

      <NavContainer>
        <LogoLink to="/">Feems</LogoLink>
        {auth.status === "authed" ? <Links>
          <NavLink to="">Home</NavLink>
          <NavLink to="userlist">My List</NavLink>
          {/* <NavLink to="">Tv Shows</NavLink> */}
        </Links> : ""}
        {auth.status === "authed" ? <AuthNavbar /> : <Navbar />}
      </NavContainer>

      <Outlet />
      <Footer />

    </>
  );
};

export default Navigation;
