import { FC } from 'react'
import { PromptMessage } from './Prompt.styles'

type PromptProps = {
    message: string
}

const Prompt: FC<PromptProps> = ({ message }) => {
    return (
        <PromptMessage>{message}</PromptMessage>
    )
}

export default Prompt