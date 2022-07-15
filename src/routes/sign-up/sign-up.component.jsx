import { useState } from 'react';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase';
import { LoginPrompt, SignUpButton, SignUpContainer, SignInLink } from './sign-up.styles';

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  displayName:""
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword, displayName } = formFields;
  
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
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
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
      <Footer />
    </>
  )
}

export default SignUp
