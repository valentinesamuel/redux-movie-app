import React from 'react'
import { useState } from 'react';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';
import { LoginPrompt, SignUpButton, SignUpContainer, SignInLink } from './sign-up.styles';

const defaultformFields = {
  email: "",
  password: "",
  confirmPassword: "",
  displayName:""
};

const SignUp = () => {
  const[formFields, setFormFields] = useState(defaultformFields);
  const { email, password,confirmPassword,displayName } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
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
          <SignUpButton disabled={password !== confirmPassword} type="submit" onClick={handleSubmit } buttonType={BUTTON_TYPE_CLASSES.red}>Sign Up</SignUpButton>
        </form>
 
        <LoginPrompt>
          <p>Already have an account?</p>
          <SignInLink to="/signin"> Sign In</SignInLink>
        </LoginPrompt>
      </SignUpContainer>
      <Footer />
    </>
  )
}

export default SignUp