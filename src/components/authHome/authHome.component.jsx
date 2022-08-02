import Feed from "../feed/Feed.component";
import Header from "../header/header.component";
import { AuthHomeContainer } from "./authHome.styles";

const AuthHome = () => {
  return (
    <>
    <AuthHomeContainer>
      <Header></Header>
      <Feed></Feed>
    </AuthHomeContainer>
    </>
  );
}

export default AuthHome;