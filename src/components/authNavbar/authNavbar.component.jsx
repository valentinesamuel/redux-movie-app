import { useSelector } from "react-redux";

const AuthNavbar = () => {
  const userName = useSelector((state) => state.userSlice.userData.user.displayName);
  return (
    <div>
      <p>{userName}</p>
    </div>
  )
}

export default AuthNavbar;