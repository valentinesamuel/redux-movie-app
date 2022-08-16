import { CardContainer, Details, Add, MovieImage, Rating, MovieTitle, Stats, Description } from './card.styles'
import addIcon from '../../assets/icons/add.svg'
import starIcon from '../../assets/icons/star.svg';
import { useDispatch } from 'react-redux';
import { addMovieToList } from '../../features/movie/userMovieList';


const Card = ({ movie }) => {
  const dispatch = useDispatch()

  const addToUserMovieList = (movie) => {
    dispatch(addMovieToList(movie))
  }

  const goToMovie = (movie_id) => {
    // if (location) {
    //   let tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length).replace('/', '');
    //   setPathName(tmp);
    //   console.log(tmp)
    // }
    // navigate(`/${movie_id}`)
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
