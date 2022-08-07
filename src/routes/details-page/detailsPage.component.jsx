import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component"
import { DetailsContainer, AdultContent, ButtonContainer, Description, GenreContainer, PictureSlides, StatsContainer, Tagline, Title } from "./detailsPage.styles"
import Star from "../../assets/icons/star.svg"

const DetailsPage = () => {
  return (
    <DetailsContainer imageUrl={`3`}>
      <Tagline>
       fqwefqwef
      </Tagline>

       <AdultContent>
        Adult Content
      </AdultContent>

      <Title>
   fhdrth
      </Title>

      <Description>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatibus rerum ipsam?
      </Description>

      <GenreContainer>
        {/* <p>Drama</p>
                    <p>Drama</p>
                    <p>Drama</p> */}
      </GenreContainer>

      <StatsContainer>
        <p className='year'>2021</p>
        <div className='divider'></div>
        <img src={Star} className="star" alt="star" />
        <p className='rating'>52752</p>
        <p className="votes">27527votes</p>
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