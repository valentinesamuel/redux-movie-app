import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { COLORS } from "../../utilities/designTokens";

export const SignInContainer = styled.div`
  padding:5% 35%;
  text-align:center;
  background: ${COLORS.matteBlack};

  @media only screen and (max-width: 30rem) {
padding:15% 5%;
height:100%;
}

@media only screen and (max-width: 50rem) {
  height:max-content;
  padding:15% 5%;
  }
`;

export const PasswordRecoveryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RecoverPassword = styled(Link)``;

export const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 4.5rem;
`;

export const RegisterationPrompt = styled.div`
  padding-top:2rem;
  display: flex;
  justify-content: center;
`;

export const SignUpLink = styled(Link)`
  color: red;
  margin-left: 0.625rem;
`;
