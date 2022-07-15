import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { AuthNavabarContainer, UserName } from "./authNavbar.styles";

const AuthNavbar = ({ currentUserName }) => {
  const onLogOut = () => {
  
}

  return (
    <div>
      <AuthNavabarContainer>
        <UserName>{currentUserName}</UserName>
        <Button onClick={onLogOut} buttonType={BUTTON_TYPE_CLASSES.red}>
          Sign Out
        </Button>
      </AuthNavabarContainer>
    </div>
  )
}

export default AuthNavbar;