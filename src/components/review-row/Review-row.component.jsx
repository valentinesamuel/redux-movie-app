import React from 'react'
import ReviewCard from '../review-card/ReviewCard.component'
import { ReviewRowContainer } from './Review-row.styles'

const ReviewRow = ({ reviews }) => {
    return (
        <ReviewRowContainer>
            {reviews && reviews.map((review) => {
                return <ReviewCard key={review.id} review={review} />
            })}
        </ReviewRowContainer>
    )
}

export default ReviewRow