import React, { useEffect, useState } from 'react'
import { HeaderContainer, ButtonContainer, Description, GenreContainer, StatsContainer, Tagline, Title, AdultContent, PictureSlides } from './header.styles';
import Star from "../../assets/icons/star.svg"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { getNowPlayingMovie } from '../../utilities/tmdb';
import Prompt from '../prompt/Prompt.component';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList, hideFeedbackMessage, showFeedbackMessage } from '../../features/movie/userMovieList';


const Header = () => {
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const [randomNumber, ] = useState(Math.floor(Math.random() * 19))
    const feedbackControl = useSelector(state => state.userMovieListSlice.feedbackMessage)

    useEffect(() => {
        const getHeaderMovie = async () => {
            const movieData = await getNowPlayingMovie();
            setMovies(movieData.results[randomNumber])
        }
        getHeaderMovie()
    }, [randomNumber])

    const addToUserList = (movie) => {
        dispatch(addMovieToList(movie))
        dispatch(showFeedbackMessage())
        setTimeout(() => dispatch(hideFeedbackMessage()), 2000);
    }

    return (
<>
            {feedbackControl === true && <Prompt message={"Added to your list"} />}

        <HeaderContainer imageUrl={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}>
                <Tagline>
                {movies.tagline ? movies.tagline : null}
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
                <Button onClick={()=>alert("Sorry, this API does not support videos for now")} className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.red} >Watch Now</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.white} onClick={() => addToUserList(movies)}>Add To List</Button>
                </ButtonContainer>

                <PictureSlides>
                    {/* <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' /> */}
                </PictureSlides>

            </HeaderContainer>
  
        </>
    )
}

export default Header;

