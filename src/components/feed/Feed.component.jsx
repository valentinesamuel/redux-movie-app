import MovieRow from '../MovieRow/Movierow.component'
import { useDispatch, useSelector } from 'react-redux'
import { Category, FeedContainer } from './Feed.styles'
import { storeGetPopularMovies } from '../../features/movie/moviesList'
import { useEffect } from 'react'

const Feed = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.movieListSlice.movies.popularMovies.results)

    useEffect(() => {
        dispatch(storeGetPopularMovies())
    }, [])

    return (
        <FeedContainer>
            <Category>
                <h2>Popualar</h2>
                <MovieRow moviesList={popularMovies} />
            </Category>
            <Category>
                <h2>Trending</h2>
                {/* <MovieRow /> */}
            </Category>
        </FeedContainer>
    )
}

export default Feed