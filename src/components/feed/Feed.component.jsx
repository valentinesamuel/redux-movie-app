import React from 'react'
import MovieRow from '../MovieRow/Movierow.component'
import { Category, FeedContainer } from './Feed.styles'

const Feed = () => {
    return (
        <FeedContainer>
            <Category>
                <h2>Trending</h2>
                <MovieRow />
            </Category>
            <Category>
                <h2>Trending</h2>
                <MovieRow />
            </Category>
        </FeedContainer>
    )
}

export default Feed