import React, { useEffect, useState } from 'react'
import { HeaderContainer, ButtonContainer, Description, GenreContainer, StatsContainer, Tagline, Title, AdultContent, PictureSlides, Message } from './header.styles';
import Star from "../../assets/icons/star.svg"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { getNowPlayingMovie } from '../../utilities/tmdb';
import Prompt from '../prompt/Prompt.component';
import { addMovieToList, hideFeedbackMessage, showFeedbackMessage } from '../../features/movie/userMovieList';
import { useAppSelector } from '../../utilities/hooks/rootstate';
import { useAppDispatch } from '../../utilities/hooks/appdispatch';
import { Movie } from '../../features/movie/movie.types';
import { ErrorContainer } from '../../routes/details-page/detailsPage.styles';
import CrossOverSpinner from '../spinners/crossover-spinner/CrossOverSpinner.component';

const initialMovie = {
    adult: false,
    backdrop_path: "",
    homepage: "",
    id: 550,
    imdb_id: "",
    original_language: "en",
    original_title: "",
    overview: "",
    popularity: 0.5,
    poster_path: null,
    release_date: "",
    revenue: 100853753,
    runtime: 139,
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 7.8,
    vote_count: 3439
}
const Header = () => {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState(initialMovie)
    const [randomNumber,] = useState(Math.floor(Math.random() * 19))
    const feedbackControl = useAppSelector(state => state.userMovieListSlice.feedbackMessage)

    useEffect(() => {
        let selectedMovie = true
        const getHeaderMovie = async () => {
            const movieData = await getNowPlayingMovie();

            if (selectedMovie) {
                setMovies(movieData.results[randomNumber])
                setIsLoading(false)
            }
        }
        getHeaderMovie()

        return () => {
            selectedMovie = false
        }
    }, [randomNumber])

    const addToUserList = (movie: Movie) => {
        dispatch(addMovieToList(movie))
        dispatch(showFeedbackMessage())
        setTimeout(() => dispatch(hideFeedbackMessage()), 2000);
    }

    return (
        <>
            {feedbackControl === true && <Prompt message={"Added to your list"} />}
            {!isLoading ? <HeaderContainer imageUrl={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}>
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
                    <Button onClick={() => alert("Sorry, this API does not support videos for now")} className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.red} >Watch Now</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.white} onClick={() => addToUserList(movies)}>Add To List</Button>
                </ButtonContainer>

                <PictureSlides>
                    {/* <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' /> */}
                </PictureSlides>

            </HeaderContainer> : <ErrorContainer><CrossOverSpinner /><Message>Loading Movie</Message></ErrorContainer>}

        </>
    )
}

export default Header;

