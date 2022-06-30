import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { PasswordRecoveryContainer, RecoverPassword, RegisterationPrompt, SignInButton, SignInContainer, SignUpLink } from "./sign-in.styles";
import {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
import ConfettiSpray from "../../utilities/confetti";

const defaultformFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;
  const registered = true;

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
   { registered && <ConfettiSpray/>}
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
        
      <SignInButton type="submit" buttonType={BUTTON_TYPE_CLASSES.red}>Sign in</SignInButton>
      </form>
      <PasswordRecoveryContainer>
        <form>
          <input  type="checkbox" name="savePassword" id="savePassword" />
          <label htmlFor="savePassword">Save Password</label>
        </form>
        <RecoverPassword to="">Forgot Password</RecoverPassword>
      </PasswordRecoveryContainer>
      <RegisterationPrompt>
        <p>New here?</p>
        <SignUpLink to="/signup"> Sign Up</SignUpLink>
      </RegisterationPrompt>
    </SignInContainer>
      <Footer/>
</>
  );
};

export default SignIn;
