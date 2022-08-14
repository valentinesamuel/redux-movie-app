import { useParams } from "react-router-dom"
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component"
import { DetailsContainer, AdultContent, ButtonContainer, Description, GenreContainer, PictureSlides, StatsContainer, Tagline, Title, Category } from "./detailsPage.styles"
import Star from "../../assets/icons/star.svg"
import { useEffect, useState } from "react"
import { getMovieCredits, getMovieDetails, getMovieRecommendation, getSimilarMovies } from "../../utilities/tmdb"
import MovieRow from "../../components/MovieRow/Movierow.component"
import PeopleRow from "../../components/people-row/PeopleRow.component"


const DetailsPage = () => {
  const { movieId } = useParams()
  const [detailMovie, setDetailMovie] = useState({})
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [movieCredit, setMovieCredit] = useState({})

  useEffect(() => {
    let isApiSubscribed = true
    const getDetails = async (id) => {
      const res = await getMovieDetails(id)
      const recommendedRes = await getMovieRecommendation(id)
      const similarRes = await getSimilarMovies(id)
      const movieCreditRes = await getMovieCredits(id)

      if (isApiSubscribed) {
        setDetailMovie(res)
        setMovieCredit(movieCreditRes)
        setRecommendedMovies(recommendedRes.results)
        setSimilarMovies(similarRes.results)
        console.log("fetch");
      }
    }

    getDetails(movieId)

    return () => {
      isApiSubscribed = false
    }
  }, [movieId])

// console.log(movieCredit.cast);

  return (
    <>
      <DetailsContainer imageUrl={`https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}`}>
        {detailMovie.tagline && <Tagline>
          {detailMovie.tagline}
        </Tagline>}

        {detailMovie.adult && <AdultContent>
        </AdultContent>}

        <Title>
          {detailMovie.title}
        </Title>

        <Description>
          {detailMovie.overview}      </Description>

        <GenreContainer>
          {/* {detailMovie.genres.map((name) => (<p key={name.id}>{name.name}</p>))} */}
        </GenreContainer>

        <StatsContainer>
          <p className='year'>{detailMovie.release_date}</p>
          <div className='divider'></div>
          <img src={Star} className="star" alt="star" />
          <p className='rating'>{detailMovie.vote_average}</p>
          <p className="votes">{detailMovie.vote_count} votes</p>
        </StatsContainer>

        <ButtonContainer>
          <Button className="leftbtn" buttonType={BUTTON_TYPE_CLASSES.red} >Watch Now</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.white} >Add To List</Button>
        </ButtonContainer>

        <PictureSlides>
          {/* <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' />
                    <img loading='lazy' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="movie" className='image' /> */}
        </PictureSlides>

      </DetailsContainer>
      <Category>
        <h2>Cast</h2>
        <PeopleRow people={movieCredit.cast}/>
      </Category>
      {/* <Category>
        <h2>Crew</h2>
        <PeopleRow people={movieCredit.crew}/>
      </Category> */}
      <Category>
        <h2>Similar to {detailMovie.title}</h2>
        <MovieRow moviesList={similarMovies} />
      </Category>
      <Category>
        <h2>Recommended for you</h2>
        <MovieRow moviesList={recommendedMovies} />
      </Category>
    </>)
}

export default DetailsPage