import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserMoviesContainer, NoMoviesText, CardContainer, MovieImage, Details, MovieTitle, Stats, Description, Rating, Remove } from './UserMovies.styles'
import StarIcon from "../../assets/icons/star.svg"
import removeIcon from '../../assets/icons/remove.svg'
import { removeMovieFromList } from '../../features/movie/userMovieList'

const UserMovies = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.userMovieListSlice.movieList)

    const removeFromUserMovieList = (movie) => {
        console.log('remove');
        dispatch(removeMovieFromList(movie))
    }

    const goToMovie = (movie_id) => {
        window.location.href = `/${movie_id}`
    }
    return (
        <UserMoviesContainer>
            {movies.length > 0 ? (<>
                {movies.map(movie => {
                    return <CardContainer>
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
            </>) : <NoMoviesText>You have not added any movies to your list</NoMoviesText>}
        </UserMoviesContainer>
    )
}

export default UserMovies