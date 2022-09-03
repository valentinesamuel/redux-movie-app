import styled from "styled-components";
import { FONTWEIGHT } from "../../utilities/designTokens";
import Button from "../button/button.component";


export const AuthNavabarContainer = styled.div`
display:flex;
align-items:center;
`;

export const UserName = styled.p`
padding-right:1rem;
font-weight: ${FONTWEIGHT.bold};
font-size:1.2rem;
`;

export const SignOutButton = styled(Button)
`


 @media only screen and (max-width: 30rem) {
    display:none;
  }

  @media only screen and (max-width: 50rem) {
  }
`

