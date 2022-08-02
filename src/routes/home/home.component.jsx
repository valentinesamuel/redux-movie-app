import { useSelector } from "react-redux";
import AuthHome from "../../components/authHome/authHome.component";
import Footer from "../../components/footer/footer.component";
import LandingPage from "../../components/landingPage/LandingPage.component";
const Home = () => {
  const auth = useSelector((state) => state.userSlice)
  return (
    // if authenticated, show the authHome component, else show landing page component
    <>
      {auth ? <AuthHome /> : <LandingPage />}
      <Footer />
    </>
  );
};

export default Home;
