import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT, } from "../../utilities/designTokens";

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
  width: 90%;
  padding: 0 4%;
  width: 100%;
  background: #040404;
`;

