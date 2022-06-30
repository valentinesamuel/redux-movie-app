import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { COLORS } from "../../utilities/designTokens";

export const SignUpContainer = styled.div`
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

export const SignUpButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const LoginPrompt = styled.div`
  padding-top:2rem;
  display: flex;
  justify-content: center;
`;

export const SignInLink = styled(Link)`
  color: red;
  margin-left: 0.625rem;
`;
