import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, FONT, FONTWEIGHT } from "../../utilities/designTokens";

export const NavLink = styled(Link)`
  padding: .125rem .3125rem;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "${FONT.poppins}";
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHT.regular};
  margin-right: 1rem;

  @media only screen and (max-width: 30rem) {
    display:none
  }

  @media only screen and (max-width: 50rem) {
  }
`;

export const Auth = styled(Link)`

`

export const NavbarContainer = styled.div`

`
