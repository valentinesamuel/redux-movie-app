import React, { useEffect, useState } from 'react'
import { HeaderContainer, ButtonContainer, Description, GenreContainer, StatsContainer, Tagline, Title, AdultContent, PictureSlides } from './header.styles';
import Star from "../../assets/icons/star.svg"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { getNowPlayingMovie } from '../../utilities/tmdb';


const Header = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
    
        const getHeaderMovie = async () => {
            const movieData = await getNowPlayingMovie();
            setMovies(movieData.results[Math.floor(Math.random() * 19)])
        }
        getHeaderMovie()
    }, [])



    return (

            <HeaderContainer imageUrl={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}>
                <Tagline>
                  {movies.tagline ? " Lorem ipsum dolor sit amet" : ""}
                </Tagline>

                {movies.adult && <AdultContent>
                    Adult Content
                </AdultContent>}

                <Title>
                    {movies.original_title}
                </Title>

                <Description>
                    {movies.overview}
                </Description>

                <GenreContainer>
                    {/* <p>Drama</p>
                    <p>Drama</p>
                    <p>Drama</p> */}
                </GenreContainer>

                <StatsContainer>
                    <p className='year'>{movies.release_date}</p>
                    <div className='divider'></div>
                    <img src={Star} className="star" alt="star" />
                    <p className='rating'>{movies.vote_average}</p>
                    <p className="votes">{movies.vote_count} votes</p>
                </StatsContainer>

                <ButtonContainer>
                    <Button className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.red} >Watch Now</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.white} >Add To List</Button>
                </ButtonContainer>

                <PictureSlides>
                    {/* <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' /> */}
                </PictureSlides>

            </HeaderContainer>
  

    )
}

export default Header;

