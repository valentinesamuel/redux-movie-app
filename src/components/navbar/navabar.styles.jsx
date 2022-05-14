import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, FONT, FONTWEIGHT } from "../../utilities/designTokens";

export const NavLink = styled(Link)`
  padding: 0.62em 0.7em;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "${FONT.poppins}";
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHT.regular};
  margin-right: 1em;
`;


export const NavbarContainer = styled.div`

`
