import React from "react";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import Image from "../../assets/images/landing-image.jpg";
import {
  CtaButton,
  HeaderBody,
  HeaderSection,
  HeaderText,
  RedText,
  HomeContainer,
  WatchAction,
  WatchActionsContainer,
  WatchSection,
  WatchText,
} from "./home.styles";
import Footer from "../../components/footer/footer.component";
const Home = () => {
  return (
    // if authenticated, show the authHome component, else show landing page component
// move HomeContainer in sode a component called 'unAuthHome'
    <>
    <HomeContainer>
      <HeaderSection imageUrl={Image}>
        <HeaderText>
          Watch the best and <RedText>exclusive</RedText> movies.
        </HeaderText>
        <HeaderBody>Watch anywhere. Cancel anytime</HeaderBody>
        <CtaButton buttonType={BUTTON_TYPE_CLASSES.red}>Check it out</CtaButton>
      </HeaderSection>

      <WatchSection>
        <WatchText>
          Watch Feems anytime, anywhere and on any device.{" "}
          <RedText>Personalised</RedText> for you{" "}
        </WatchText>
        <WatchActionsContainer>
          <WatchAction>
            <RedText>icon</RedText>
            <h2>Watch on your TV</h2>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, AppleTv, Blu-ray players
              and more.
            </p>
          </WatchAction>
          <WatchAction>
            <RedText>icon</RedText>
            <h2>Watch instantly</h2>
            <p>
             Available on phone and tablet wherever you go.
            </p>
          </WatchAction>
          <WatchAction>
            <RedText>icon</RedText>
            <h2>Watch on your TV</h2>
            <p>
              Watch right on <RedText>Feems.com</RedText>
            </p>
          </WatchAction>
        </WatchActionsContainer>
      </WatchSection>
    </HomeContainer>
    <Footer/>
    </>
  );
};

export default Home;
