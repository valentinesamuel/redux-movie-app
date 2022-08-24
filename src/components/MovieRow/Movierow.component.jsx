import Card from '../card/card.component'
import { MovieRowContainer } from './Movierow.styles'

const MovieRow = ({ moviesList }) => {

    return (
        <MovieRowContainer>
            {moviesList && moviesList.map(movie => {
                return <Card key={movie.id} movie={movie} />
            })}

        </MovieRowContainer>
    )
}

export default MovieRow