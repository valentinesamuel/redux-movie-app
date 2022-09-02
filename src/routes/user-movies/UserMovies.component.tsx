import { UserMoviesContainer, NoMoviesText, CardContainer, MovieImage, Details, MovieTitle, Stats, Description, Rating, Remove, ButtonContainer, MovieListContainer } from './UserMovies.styles'
import StarIcon from "../../assets/icons/star.svg"
import removeIcon from '../../assets/icons/remove.svg'
import { clearMovieList, removeMovieFromList, saveMovieList } from '../../features/movie/userMovieList'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component'
import { useAppSelector } from '../../utilities/hooks/rootstate'
import { useAppDispatch } from '../../utilities/hooks/appdispatch'
import { Movie } from '../../features/movie/movie.types'

const UserMovies = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector(state => state.userMovieListSlice.listOfMovies)
    const auth = useAppSelector((state) => state.userSlice.userData)

    const removeFromUserMovieList = (movie: Movie) => {
        dispatch(removeMovieFromList(movie))
    }

    const saveListToDatabase = () => {
        dispatch(saveMovieList({ auth, movies }))
    }
    
    const clearUserMovieList = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`${auth.displayName}, are you sure you want to clear your list?`)) {
            dispatch(clearMovieList())
            dispatch(saveMovieList({ auth, movies }))
        }
    }

    const goToMovie = (movie_id: number) => {
        window.location.href = `/${movie_id}`
    }
    return (
        <UserMoviesContainer>
                    <ButtonContainer>
                        <Button onClick={saveListToDatabase} className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.white}>Save List</Button>
                        <Button onClick={clearUserMovieList} buttonType={BUTTON_TYPE_CLASSES.red}>Clear List</Button>
                    </ButtonContainer>

            {movies.length > 0 ? (
                <>
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