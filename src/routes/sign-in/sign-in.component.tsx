import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { AuthIcon, AuthProvider, PasswordRecoveryContainer, RecoverPassword, RegisterationPrompt, SignInButton, SignInContainer, SignUpLink } from "./sign-in.styles";

import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import GoogleIcon from '../../assets/icons/google.svg';
import GithubIcon from '../../assets/icons/github.svg';
import { getCurrentUser, loginWithGooglePopup, loginWithGithubPopup, startLoading, stopLoading } from "../../features/user/userSlice";
import { getMovieList } from "../../features/movie/userMovieList";
import { storeGetNowPlayingMovies, storeGetPopularMovies, storeGetTopRatedMovies, storeGetUpcomingMovies } from "../../features/movie/moviesList";
import { useAppDispatch } from "../../utilities/hooks/appdispatch";
import { useAppSelector } from "../../utilities/hooks/rootstate";

const defaultformFields = {
  email: "",
  password: "",
};


const SignIn = () => {
  const auth = useAppSelector((state) => state.userSlice)
  const dispatch = useAppDispatch()
  const [formFields, setFormFields] = useState(defaultformFields);
  const navigate = useNavigate();
  const { email, password } = formFields;
  // const registered = false; use state to manipulate this

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(startLoading())
      dispatch(getCurrentUser(email))
      dispatch(storeGetPopularMovies())
      dispatch(storeGetTopRatedMovies())
      dispatch(storeGetNowPlayingMovies())
      dispatch(storeGetUpcomingMovies())
      setFormFields(defaultformFields)
      dispatch(getMovieList(email))
      dispatch(stopLoading())
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        alert("User not found.")
      } else {
        alert(error);
      }
    }

    navigate("/")

  };

  const loginWithGoogle = async () => {
   dispatch(loginWithGooglePopup());


    navigate("/")
  }

  const onLoginWithGithubPopup = async () => {
    dispatch(loginWithGithubPopup());
    navigate("/")

  }

  return (
    <>
      <SignInContainer >
        <h2>Welcome Back😊</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <AuthProvider>
            <AuthIcon onClick={loginWithGoogle} src={GoogleIcon} alt="google-sign-in" />
            <AuthIcon src={GithubIcon} alt="github-sign-in" onClick={onLoginWithGithubPopup} />
          </AuthProvider>
          <SignInButton type="submit" buttonType={BUTTON_TYPE_CLASSES.red} isLoading={auth.status === 'authing' ? true : false}>Sign in</SignInButton>
        </form>
        <PasswordRecoveryContainer>
          <form>
            <input type="checkbox" name="savePassword" id="savePassword" />
            <label htmlFor="savePassword">Save Password</label>
          </form>
          <RecoverPassword to="">Forgot Password</RecoverPassword>
        </PasswordRecoveryContainer>
        <RegisterationPrompt>
          <p>New here?</p>
          <SignUpLink to="/signup"> Sign Up</SignUpLink>
        </RegisterationPrompt>

      </SignInContainer>
    </>
  );
};

export default SignIn;
