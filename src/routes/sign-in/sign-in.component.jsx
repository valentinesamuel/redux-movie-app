import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { PasswordRecoveryContainer, RecoverPassword, RegisterationPrompt, SignInButton, SignInContainer, SignUpLink } from "./sign-in.styles";
import {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";

const defaultformFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

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
    <SignInContainer >
      <h2>Sign in</h2>
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
        
      </form>
      <PasswordRecoveryContainer>
        <form>
          <input  type="checkbox" name="savePassword" id="savePassword" />
          <label htmlFor="savePassword">Save Password</label>
        </form>
        <RecoverPassword to="">Forgot Password</RecoverPassword>
      </PasswordRecoveryContainer>
      <SignInButton buttonType={BUTTON_TYPE_CLASSES.red}>Sign in</SignInButton>
      <RegisterationPrompt>
        <p>New here?</p>
        <SignUpLink to=""> Sign Up</SignUpLink>
      </RegisterationPrompt>
    </SignInContainer>
      <Footer/>
    </>
  );
};

export default SignIn;
