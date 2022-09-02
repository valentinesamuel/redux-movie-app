import React, { FC } from 'react'
import { Review } from '../../features/movie/movie.types'
import ReviewCard from '../review-card/ReviewCard.component'
import { ReviewRowContainer } from './Review-row.styles'

type ReviewRowProps = {
    reviews: Review[]
}

const ReviewRow:FC<ReviewRowProps> = ({ reviews }) => {

    return (
        <ReviewRowContainer>
            {reviews && reviews.map((review) => {
                return <ReviewCard key={review.author} review={review} />
            })}
        </ReviewRowContainer>
    )
}

export default ReviewRow