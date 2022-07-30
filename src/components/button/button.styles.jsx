import styled from "styled-components";
import { BORDERRADIUS, COLORS, DURATION, FONT } from "../../utilities/designTokens";

export const BaseButton = styled.button`
text-transform: uppercase;
  color: ${COLORS.white};
  padding: 0.2em 1.5em 0.2em 1.5em;
  font-family: "${FONT.poppins}";
  transition: ${DURATION.point3}s;
  border-radius: ${BORDERRADIUS.fivepixel};
  border: none;
  cursor: pointer;
  font-size: 1em;
  line-height: 3em;

  :hover{
transform: rotate(2deg);
}

 
`;

export const RedButton = styled(BaseButton)`
  background-color: ${COLORS.red};


  
`;

export const BlackButton = styled(BaseButton)`
  background-color: ${COLORS.black};


`;

export const WhiteButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.black};


`;
