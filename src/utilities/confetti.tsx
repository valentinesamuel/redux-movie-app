import Confetti from 'react-confetti';



const ConfettiSpray = () => {
    const { innerHeight, innerWidth } = window

    return (
        <Confetti style={{ width: '100%', backgroundColor: "transparent", zIndex:"3" }}
            width={innerWidth}
            height={innerHeight}
            recycle={false}
        />
    )
}

export default ConfettiSpray