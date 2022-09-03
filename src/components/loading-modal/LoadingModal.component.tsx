import React, { FC } from 'react'
import CrossOverSpinner from '../spinners/crossover-spinner/CrossOverSpinner.component'
import { LoadingModalCard, LoadingModalContainer, Message } from './LoadingModal.styles'

export type LoadingModalProps = {
    message: string
}


const LoadingModal: FC<LoadingModalProps> = ({ message }) => {
    return (
        <LoadingModalContainer>
            <LoadingModalCard>
            <CrossOverSpinner />
            <Message>{message}</Message>
            </LoadingModalCard>
        </LoadingModalContainer>
    )
}

export default LoadingModal