import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserMoviesContainer, NoMoviesText, CardContainer, MovieImage, Details, MovieTitle, Stats, Description, Rating, Remove, ButtonContainer, MovieListContainer } from './UserMovies.styles'
import StarIcon from "../../assets/icons/star.svg"
import removeIcon from '../../assets/icons/remove.svg'
import { clearMovieList, removeMovieFromList } from '../../features/movie/userMovieList'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component'

const UserMovies = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.userMovieListSlice.movieList)
    const username = useSelector((state) => state.userSlice.userData)

    const removeFromUserMovieList = (movie) => {
        dispatch(removeMovieFromList(movie))
    }

    const saveListToDatabase = () => {
        console.log("save to db!!");
    }

    const clearUserMovieList = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`${username.displayName}, are you sure you want to clear your list?`)) {
            dispatch(clearMovieList())
        }
    }

    const goToMovie = (movie_id) => {
        window.location.href = `/${movie_id}`
    }
    return (
        <UserMoviesContainer>

            {movies.length > 0 ? (
                <>
                    <ButtonContainer>
                        <Button onClick={saveListToDatabase} className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.white}>Save List</Button>
                        <Button onClick={clearUserMovieList} buttonType={BUTTON_TYPE_CLASSES.red}>Clear List</Button>
                    </ButtonContainer>
                    <MovieListContainer>
                        {movies.map(movie => {
                            return <CardContainer >
                                <MovieImage alt='movie-poster' loading='lazy' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                                <Details>
                                    <MovieTitle onClick={() => goToMovie(movie.id)}>
                                        {movie.title}
                                    </MovieTitle>
                                    <Stats>
                                        <Rating>
                                            <img loading='lazy' src={StarIcon} alt="star" />
                                            <p>{movie.vote_average} / 10</p>
                                        </Rating>
                                        <Remove onClick={() => removeFromUserMovieList(movie)} src={removeIcon} loading='lazy' alt='remove' />
                                    </Stats>
                                    <Description>
                                        <p>
                                            {movie.overview}
                                        </p>
                                    </Description>
                                </Details>
                            </CardContainer>
                        })}
                    </MovieListContainer>
                </>) : <NoMoviesText>You have not added any movies to your list</NoMoviesText>}
        </UserMoviesContainer>
    )
}

export default UserMovies