import Footer from "../../components/footer/footer.component";
import LandingPage from "../../components/landingPage/LandingPage.component";
const Home = () => {
  return (
    // if authenticated, show the authHome component, else show landing page component
    <>
      <LandingPage />
      <Footer />
    </>
  );
};

export default Home;
