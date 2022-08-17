import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearMovieList } from '../../features/movie/userMovieList'
import { logCurrentUserOut } from '../../features/user/userSlice'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { HamMenuBody, HamMenuContainer, NavLink, SignOutButton } from './HamMenu.styles'

const HamMenu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const displayHamMenuBody = () => {
        setIsOpen((prevState => !prevState))
    }

    const onLogOut = () => {
        dispatch(logCurrentUserOut());
        dispatch(clearMovieList())
        navigate("/")
    }

    return (
        <>
            <HamMenuContainer onClick={displayHamMenuBody}>
                <div> </div>
                <div> </div>
                <div> </div>
            </HamMenuContainer>
            {isOpen && <HamMenuBody>
                <NavLink to="">Home</NavLink>
                <NavLink to="userlist">My List</NavLink>
                <NavLink to="">Tv Shows</NavLink>
                <SignOutButton onClick={onLogOut} buttonType={BUTTON_TYPE_CLASSES.red}>
                    Sign Out
                </SignOutButton>
            </HamMenuBody>}
        </>
    )
}

export default HamMenu