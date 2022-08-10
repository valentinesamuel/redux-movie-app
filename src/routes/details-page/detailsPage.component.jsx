import { useParams } from "react-router-dom"
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component"
import { DetailsContainer, AdultContent, ButtonContainer, Description, GenreContainer, PictureSlides, StatsContainer, Tagline, Title } from "./detailsPage.styles"
import Star from "../../assets/icons/star.svg"
import { useEffect, useState } from "react"
import { getMovieDetails } from "../../utilities/tmdb"

const DetailsPage = () => {
  const { movieId } = useParams()
  const [detailMovie, setDetailMovie] = useState({})

  useEffect(() => {
    let isApiSubscribed = true
    const getMovieDetail = async (id) => {
      const res = await getMovieDetails(id)
      if (isApiSubscribed) {
        setDetailMovie(res)
        console.log("fetch");
      }
    }

    getMovieDetail(movieId)

    return () => {
      isApiSubscribed = false
    }
  }, [movieId])
  console.log(detailMovie)


  return (
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
        { detailMovie.overview}      </Description>

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
  )
}

export default DetailsPage