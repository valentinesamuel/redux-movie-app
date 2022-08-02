import React from 'react'
import { CardContainer, Details, Add, MovieImage, Rating, MovieTitle, Stats, Description } from './card.styles'
import addIcon from  '../../assets/icons/add.svg'
import starIcon from '../../assets/icons/star.svg';

const Card = () => {
  return (
    <CardContainer>

      <MovieImage alt='movie-poster' src='https://images.unsplash.com/photo-1659385631755-37e381232c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
      <Details>
        <MovieTitle>
          Intestellar
        </MovieTitle>
        <Stats>
          <Rating>
            <img loading='lazy' src={starIcon} alt="star" />
<p>9.5 / 10</p>
          </Rating>
               <Add loading='lazy' src={addIcon} alt='add'></Add>
        </Stats>
        <Description>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fuga eum ut?
          </p>
        </Description>
      </Details>
    </CardContainer>
  )
}

export default Card