import MovieRow from '../MovieRow/Movierow.component'
import { useDispatch, useSelector } from 'react-redux'
import { Category, FeedContainer } from './Feed.styles'
import { useEffect } from 'react'
import { storeGetUpcomingMovies, storeGetNowPlayingMovies,storeGetPopularMovies,storeGetTopRatedMovies} from '../../features/movie/moviesList'

const Feed = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.movieListSlice.movies.popularMovies.results)
    const topRatedMovies = useSelector(state => state.movieListSlice.movies.topRatedMovies.results)
    const nowPlayingMovies = useSelector(state => state.movieListSlice.movies.nowPlayingMovies.results)
    const upcomingMovies = useSelector(state => state.movieListSlice.movies.upcomingMovies.results)

    useEffect(() => {
        
        dispatch(storeGetPopularMovies())
        dispatch(storeGetTopRatedMovies())
        dispatch(storeGetNowPlayingMovies())
        dispatch(storeGetUpcomingMovies())
    }, [dispatch])
    return (
        <FeedContainer>
            <Category>
                <h2>Popular</h2>
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
            <Category>
                <h2>Upcoming</h2>
                <MovieRow moviesList={upcomingMovies} />
            </Category>
        </FeedContainer>
    )
}

export default Feed