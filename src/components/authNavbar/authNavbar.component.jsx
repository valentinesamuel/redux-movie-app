import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logCurrentUserOut } from "../../features/user/userSlice";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { AuthNavabarContainer, UserName } from "./authNavbar.styles";

const AuthNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.userSlice.userData.displayName)

  const onLogOut = () => {
    dispatch(logCurrentUserOut());
    navigate("/")
}

  return (
    <div>
      <AuthNavabarContainer>
        <UserName>{username}</UserName>
        <Button onClick={onLogOut} buttonType={BUTTON_TYPE_CLASSES.red}>
          Sign Out
        </Button>
      </AuthNavabarContainer>
    </div>
  )
}

export default AuthNavbar;