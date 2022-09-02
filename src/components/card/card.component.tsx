import { CardContainer, Details, Add, MovieImage, Rating, MovieTitle, Stats, Description } from './card.styles'
import addIcon from '../../assets/icons/add.svg'
import starIcon from '../../assets/icons/star.svg';
import { useDispatch } from 'react-redux';
import { addMovieToList, hideFeedbackMessage, showFeedbackMessage } from '../../features/movie/userMovieList';
import { Movie } from '../../features/movie/movie.types';
import { FC } from 'react';

type CardProps = {
  movie: Movie
}

const Card:FC<CardProps> = ({ movie }) => {
  const dispatch = useDispatch()


  const addToUserMovieList = (movie:Movie) => {
    dispatch(addMovieToList(movie))
    dispatch(showFeedbackMessage())
    setTimeout(()=>dispatch(hideFeedbackMessage()), 2000);
  }

  const goToMovie = (movie_id: number) => {
    window.location.href = `/${movie_id}`
  }

  return (
    <CardContainer>
      <MovieImage alt='movie-poster' loading='lazy' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <Details>
        <MovieTitle onClick={() => goToMovie(movie.id)}>
          {movie.title}
        </MovieTitle>
        <Stats>
          <Rating>
            <img loading='lazy' src={starIcon} alt="star" />
            <p>{movie.vote_average} / 10</p>
          </Rating>
          <Add loading='lazy' onClick={() => addToUserMovieList(movie)} src={addIcon} alt='add'></Add>
        </Stats>
        <Description>
          <p>
            {movie.overview}
          </p>
        </Description>
      </Details>
    </CardContainer>
  )
}

export default Card
