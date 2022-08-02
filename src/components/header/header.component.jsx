import React from 'react'
import { HeaderContainer, ButtonContainer, Description, GenreContainer, StatsContainer, Tagline, Title, AdultContent, PictureSlides } from './header.styles';
import Star from "../../assets/icons/star.svg"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"


const Header = () => {
    return (
        <HeaderContainer>
            <Tagline>
                Lorem ipsum dolor sit amet consectetur!
            </Tagline>

            <AdultContent>
                Adult Content
            </AdultContent>

            <Title>
                Moving Target
            </Title>

            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam maxime veniam ea velit inventore. Ratione exercitationem, ipsum debitis optio doloremque placeat eum nam?
            </Description>

            <GenreContainer>
                <p>Drama</p>
                <p>Drama</p>
                <p>Drama</p>
            </GenreContainer>

            <StatsContainer>
                <p className='year'>2021</p>
                <div className='divider'></div>
                <img src={Star} className="star" alt="star" />
                <p className='rating'>3.5</p>
                <p className="votes">2324 votes</p>
            </StatsContainer>

            <ButtonContainer>
                <Button className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.red} >Watch Now</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.white} >Add To List</Button>
            </ButtonContainer>

            <PictureSlides>
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
            </PictureSlides>

        </HeaderContainer>
    )
}

export default Header;