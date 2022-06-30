import Confetti from 'react-confetti';

const ConfettiSpray = () => {
    const { innerHeight, innerWidth } = window


    return (
        <Confetti
            width={innerWidth}
            height={innerHeight}
            recycle={false}
        />
    )
}

export default ConfettiSpray