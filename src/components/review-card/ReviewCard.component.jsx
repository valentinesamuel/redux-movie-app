import React from 'react'
import { Review, ReviewCardContainer, ReviewerImage } from './ReviewCard.styles'

const ReviewCard = ({ review }) => {
    return (
        <ReviewCardContainer>
            {/* <ReviewerImage src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`} /> */}
            <div>
                <h3>{review.author_details.username}</h3>
                <Review>{review.content}</Review>
            </div>
        </ReviewCardContainer>
    )
}

export default ReviewCard