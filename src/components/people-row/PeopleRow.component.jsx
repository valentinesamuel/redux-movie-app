import PersonCard from '../person-card/PersonCard.component'
import { PeopleRowContainer } from './People.styles'

const PeopleRow = ({ people }) => {
    console.log(people)
    return (
        <PeopleRowContainer>
            {people && people.map(person => {
                return <PersonCard key={person.id} person={person} />
            })}
        </PeopleRowContainer>
    )
}

export default PeopleRow