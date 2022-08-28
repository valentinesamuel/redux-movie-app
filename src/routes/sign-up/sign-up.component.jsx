import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import { getCurrentUser } from '../../features/user/userSlice';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, createUserMovieListDocument } from '../../utilities/firebase';
import { LoginPrompt, SignUpButton, SignUpContainer, SignInLink } from './sign-up.styles';
import { storeGetNowPlayingMovies, storeGetPopularMovies, storeGetTopRatedMovies, storeGetUpcomingMovies } from '../../features/movie/moviesList';

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
  const movieList = useSelector((state) => state.userMovieListSlice.movieList)
  const dispatch = useDispatch()

  const resetFormFields = (event) => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Oopsie, password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      //get user pass it into createUserDocumentFromAuth
      await createUserDocumentFromAuth(user, { displayName });
      await createUserMovieListDocument(user, movieList)
      resetFormFields();
// pass in user
      dispatch(getCurrentUser(email))
      dispatch(storeGetPopularMovies())
      dispatch(storeGetTopRatedMovies())
      dispatch(storeGetNowPlayingMovies())
      dispatch(storeGetUpcomingMovies())
      navigate("/")
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user. Email already in use")
      } else {
        console.error("user creation error: ", error);
      }
    }

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
          <SignUpButton disabled={password !== confirmPassword} type="submit" onClick={handleSubmit} buttonType={BUTTON_TYPE_CLASSES.red}>Sign Up</SignUpButton>
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
