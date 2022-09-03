import React, { FC } from 'react'
import { Review } from '../../features/movie/movie.types'
import { ReviewContent, ReviewCardContainer, ReviewerImage } from './ReviewCard.styles'

type ReviewCardProps = {
    review: Review
}

const ReviewCard:FC<ReviewCardProps> = ({ review }) => {
    let imgsrc = 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/72/723ae382dcb5fceef0afba29f98623746c1e8c81_full.jpg'

    return (
        <ReviewCardContainer>
            <ReviewerImage src={imgsrc} />
            <div>
                <h3>{review.author_details.username}</h3>
                <ReviewContent>{review.content}</ReviewContent>
            </div>
        </ReviewCardContainer>
    )
}

export default ReviewCard