import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT, } from "../../utilities/designTokens";

export const Nav = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100vh
`


export const LogoLink = styled(Link)`
  font-size: 4rem;
  text-decoration: none;
  font-family: "${FONT.oswald}";
  text-transform: uppercase;
  color: ${COLORS.red}
`;


export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  width: 100%;
  background:   ${COLORS.matteBlack};
  height:auto;
`;

