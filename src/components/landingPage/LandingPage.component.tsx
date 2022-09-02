import { FaTv } from "react-icons/fa";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { HeaderSection, HeaderText, HomeContainer, CtaButton, HeaderBody, Icon, RedText, WatchAction, WatchActionsContainer, WatchSection, WatchText, } from './LandingPage.styles';
import Image from '../../assets/images/landing-image.jpg'

const LandingPage = () => {

    
    const onGetMovie = async () => {
       alert("Please login or signup to see movies")
    }
    return (
        <HomeContainer>
            <HeaderSection imageUrl={Image}>
                <HeaderText>
                    Watch the best and <RedText>exclusive</RedText> movies.
                </HeaderText>
                <HeaderBody>Watch anywhere. Cancel anytime</HeaderBody>
                <CtaButton  onClick={onGetMovie} buttonType={BUTTON_TYPE_CLASSES.red}>
                    Check it out
                </CtaButton>
            </HeaderSection>

            <WatchSection>
                <WatchText>
                    Watch Feems anytime, anywhere and on any device.
                    <RedText> Personalised</RedText> for you
                </WatchText>
                <WatchActionsContainer>
                    <WatchAction>
                        <RedText>
                            <Icon >
                                <FaTv className="red-icon" size="sm" style={{backgroundColor: 'red'}}/>
                            </Icon>
                        </RedText>
                        <h2>Watch on your TV</h2>
                        <p>
                            Smart TVs, PlayStation, Xbox, Chromecast, AppleTv, Blu-ray
                            players and more.
                        </p>
                    </WatchAction>
                    <WatchAction>
                        <RedText>
                            <Icon>
                                <FaTv className="red-icon" size="sm" style={{ backgroundColor: 'red' }} />
                            </Icon>
                        </RedText>
                        <h2>Watch instantly</h2>
                        <p>Available on phone and tablet wherever you go.</p>
                    </WatchAction>
                    <WatchAction>
                        <RedText>
                            <Icon>
                                <FaTv className="red-icon" size="sm" style={{ backgroundColor: 'red' }} />
                            </Icon>
                        </RedText>
                        <h2>Watch on your TV</h2>
                        <p>
                            Watch right on <RedText>https://feemflix.netlify.app/</RedText>
                        </p>
                    </WatchAction>
                </WatchActionsContainer>
            </WatchSection>
        </HomeContainer>
    )
}

export default LandingPage