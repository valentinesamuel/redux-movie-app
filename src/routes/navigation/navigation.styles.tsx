import { Link } from "react-router-dom";
import styled from "styled-components"; 
import { COLORS, FONT, FONTWEIGHT, } from "../../utilities/designTokens";

export const Nav = styled.div`


`


export const LogoLink = styled(Link)`
  font-size: 4rem;
  text-decoration: none;
  font-family: "${FONT.oswald}";
  text-transform: uppercase;
  color: ${COLORS.red};
  
  @media only screen and (max-width: 30rem) {
     font-size: 2.5rem;
   
  }

  @media only screen and (max-width: 50rem) {
  }
`;


export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  width: 100%;

  @media only screen and (max-width: 30rem) {
  padding: 4% 4%;
  }

  @media only screen and (max-width: 50rem) {
  }
`;

export const NavLink = styled(Link)`
  padding: .125rem .3125rem;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "${FONT.poppins}";
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHT.bold};
  margin-right: 1rem;

  &:hover{
    text-decoration:underline;
}
  @media only screen and (max-width: 30rem) {
    display:none
  }

  @media only screen and (max-width: 50rem) {
  }
`;


export const Links = styled.div`
margin: 0 0;
`;