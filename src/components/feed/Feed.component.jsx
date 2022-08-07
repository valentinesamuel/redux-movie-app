import MovieRow from '../MovieRow/Movierow.component'
import { useDispatch, useSelector } from 'react-redux'
import { Category, FeedContainer } from './Feed.styles'
import { storeGetNowPlayingMovies, storeGetPopularMovies, storeGetTopRatedMovies } from '../../features/movie/moviesList'
import { useEffect } from 'react'

const Feed = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.movieListSlice.movies.popularMovies.results)
    const topRatedMovies = useSelector(state => state.movieListSlice.movies.topRatedMovies.results)
    const nowPlayingMovies = useSelector(state => state.movieListSlice.movies.nowPlayingMovies.results)

    useEffect(() => {
        dispatch(storeGetPopularMovies()) 
        dispatch(storeGetTopRatedMovies()) 
        dispatch(storeGetNowPlayingMovies())
    }, [dispatch])
    return (
        <FeedContainer>
            <Category>
                <h2>Popualar</h2>
                <MovieRow moviesList={popularMovies} />
            </Category>
            <Category>
                <h2>Top Rated</h2>
                <MovieRow moviesList={topRatedMovies} />
            </Category>
            <Category>
                <h2>Now Playing</h2>
                <MovieRow moviesList={nowPlayingMovies} />
            </Category>
        </FeedContainer>
    )
}

export default Feed