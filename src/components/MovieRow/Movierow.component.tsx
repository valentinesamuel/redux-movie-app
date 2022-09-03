import { FC } from 'react'
import { Movie } from '../../features/movie/movie.types'
import Card from '../card/card.component'
import { MovieRowContainer } from './Movierow.styles'

type MovieRowProps = {
    moviesList: Movie[]
}

const MovieRow:FC<MovieRowProps> = ({ moviesList }) => {

    return (
        <MovieRowContainer>
            {moviesList && moviesList.map(movie => {
                return <Card key={movie.id} movie={movie} />
            })}

        </MovieRowContainer>
    )
}

export default MovieRow