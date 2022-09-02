import { FC } from 'react'
import { Person } from '../../features/movie/movie.types'
import PersonCard from '../person-card/PersonCard.component'
import { PeopleRowContainer } from './People.styles'

type PeopleRowProps = {
    people: Person[]
}

const PeopleRow: FC<PeopleRowProps> = ({ people }) => {
 
    return (
        <PeopleRowContainer>
            {people && people.map(person => {
                return <PersonCard key={person.id} person={person} />
            })}
        </PeopleRowContainer>
    )
}

export default PeopleRow