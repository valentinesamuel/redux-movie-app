import React, { FC } from 'react'
import { PersonCardContainer, Picture, Description } from './PersonCard.styles'
import unkonwnPerson from "../../assets/images/unknown-person.jpg"
import { Person } from '../../features/movie/movie.types'

type PersonCardProps = {
  person: Person
}

const PersonCard:FC<PersonCardProps> = ({ person }) => {
  return (
    <PersonCardContainer>
      <Picture src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : unkonwnPerson} />
      <Description>
        <h4>{ person.name}</h4>
        <p>{person.known_for_department}</p>
      </Description>
    </PersonCardContainer>
  )
}

export default PersonCard