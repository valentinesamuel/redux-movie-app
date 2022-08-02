import { useSelector } from "react-redux";
import AuthHome from "../../components/authHome/authHome.component";
import LandingPage from "../../components/landingPage/LandingPage.component";
import { HomeContainer } from "./home.styles";
const Home = () => {
  const auth = useSelector((state) => state.userSlice)
  return (
   
    <HomeContainer>
      {auth.status === "authed" ? <AuthHome /> : <LandingPage />}
      {/* <Footer /> */}
    </HomeContainer>
  );
};

export default Home;
