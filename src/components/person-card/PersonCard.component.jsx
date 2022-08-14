import React from 'react'
import { PersonCardContainer, Picture, Description } from './PersonCard.styles'

const PersonCard = ({ person }) => {
  return (
    <PersonCardContainer>
      <Picture src={`https://image.tmdb.org/t/p/original${person.profile_path}`} />
      <Description>
        <h4>{ person.name}</h4>
        <p>{person.known_for_department}</p>
      </Description>
    </PersonCardContainer>
  )
}

export default PersonCard