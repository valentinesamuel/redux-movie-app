import AuthHome from "../../components/authHome/authHome.component";
import LandingPage from "../../components/landingPage/LandingPage.component";
import { useAppSelector } from "../../utilities/hooks/rootstate";
import { HomeContainer } from "./home.styles";
const Home = () => {
  const auth = useAppSelector((state) => state.userSlice)
  return (
   
    <HomeContainer>
      {auth.status === "authed" ? <AuthHome /> : <LandingPage />}
      {/* <Footer /> */}
    </HomeContainer>
  );
};

export default Home;
