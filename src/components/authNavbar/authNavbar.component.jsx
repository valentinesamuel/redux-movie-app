import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearMovieList } from "../../features/movie/userMovieList";
import { logCurrentUserOut } from "../../features/user/userSlice";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { AuthNavabarContainer, UserName, SignOutButton } from "./authNavbar.styles";

const AuthNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.userSlice)

  const onLogOut = () => {
    dispatch(logCurrentUserOut());
    dispatch(clearMovieList())
    navigate("/")
}

  return (
    <div> 
      <AuthNavabarContainer>
       {auth.status === "authed" && <UserName>{auth.userData.displayName}</UserName>}
        <SignOutButton onClick={onLogOut} buttonType={BUTTON_TYPE_CLASSES.red}>
          Sign Out
        </SignOutButton>
      </AuthNavabarContainer>
    </div>
  )
}

export default AuthNavbar;