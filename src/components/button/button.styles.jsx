import styled from "styled-components";
import { COLORS, DURATION, FONT } from "../../utilities/designTokens";

export const BaseButton = styled.button`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  padding: 0.2em 1.5em 0.2em 1.5em;
  text-transform: uppercase;
  font-family: "${FONT.poppins}";
  border: none;
  cursor: pointer;
  font-size: 1em;
  line-height: 3em;
  transition: ${DURATION.point3}s;

  &:hover,
  &:focus {
    box-shadow: inset 0 -3.25em 0 0 ${COLORS.red};
  }
`;

export const RedButton = styled(BaseButton)`
  background-color: ${COLORS.red};

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${COLORS.black};
    box-shadow: inset 0 -3.25em 0 0 ${COLORS.white};
  }
`;

export const GreyButton = styled(BaseButton)`
  background-color: ${COLORS.grey};

  &:hover,
  &:focus {
    background-color: transparent;
    border: none;
  }
`;

export const BlackButton = styled(BaseButton)`
  background-color: ${COLORS.black};
  &:hover,
  &:focus {
    background-color: transparent;
    border: none;
  }
  `;
  
  export const WhiteButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  
  &:hover {
    
    background-color: transparent;
    color: ${COLORS.white};
  }
`;
