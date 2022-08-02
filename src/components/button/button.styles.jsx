import styled from "styled-components";
import { BORDERRADIUS, COLORS, DURATION, FONT } from "../../utilities/designTokens";

export const BaseButton = styled.button`
text-transform: uppercase;
  color: ${COLORS.white};
  padding: 1rem 2rem;
  
  font-family: "${FONT.poppins}";
  transition: ${DURATION.point3}s;
  border-radius: ${BORDERRADIUS.fivepixel};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  :hover{
transform: rotate(2deg);
}

 @media only screen and (max-width: 30rem) {
    padding: .5rem .9rem;
  }

  @media only screen and (max-width: 50rem) {
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
