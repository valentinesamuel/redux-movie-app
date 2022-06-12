import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";

export const SignInContainer = styled.div`
  background-color: black;
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
