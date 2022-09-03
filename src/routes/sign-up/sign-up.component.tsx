import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import FormInput from '../../components/form-input/form-input.component';
import { closeConfetti, getCurrentUser, openConfetti, startLoading, stopLoading } from '../../features/user/userSlice';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, createUserMovieListDocument } from '../../utilities/firebase';
import { LoginPrompt, SignUpButton, SignUpContainer, SignInLink } from './sign-up.styles';
import { storeGetNowPlayingMovies, storeGetPopularMovies, storeGetTopRatedMovies, storeGetUpcomingMovies } from '../../features/movie/moviesList';
import { useAppDispatch } from '../../utilities/hooks/appdispatch';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  displayName: ""
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();
  const { email, password, confirmPassword, displayName } = formFields;
  const dispatch = useAppDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Oopsie, password do not match");
      return;
    }

    try {
      dispatch(startLoading())
      const res = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(res!, { displayName });
      await createUserMovieListDocument(res!, [])
      resetFormFields();
      dispatch(getCurrentUser(email))
      dispatch(storeGetPopularMovies())
      dispatch(storeGetTopRatedMovies())
      dispatch(storeGetNowPlayingMovies())
      dispatch(storeGetUpcomingMovies())
      navigate("/")
      dispatch(stopLoading())
      dispatch(openConfetti())
      setTimeout(() => dispatch(closeConfetti()), 5000)
      
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("User Already exists.")
        dispatch(stopLoading())
      } else {
        alert(error);
        dispatch(stopLoading())
      }
    }
    navigate("/")
  };


  return (
    <>
      <SignUpContainer >
        <h2>Register a new account🥰</h2>
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
            label="Username"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <SignUpButton disabled={password !== confirmPassword} type="submit" onClick={() => handleSubmit} buttonType={BUTTON_TYPE_CLASSES.red}>Sign Up</SignUpButton>
        </form>

        <LoginPrompt>
          <p>Already have an account?</p>
          <SignInLink to="/signin"> Sign In</SignInLink>
        </LoginPrompt>
      </SignUpContainer>
    </>
  )
}

export default SignUp
