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

  &:hover {
    border: 1px solid ${COLORS.white};
  }
`;

export const RedButton = styled(BaseButton)`
  background-color: ${COLORS.red};
`;

export const GreyButton = styled(BaseButton)`
  background-color: ${COLORS.grey};
`;

export const BlackButton = styled(BaseButton)`
  background-color: ${COLORS.black};

  &:hover {
    border: 1px solid ${COLORS.white};
    background-color: ${COLORS.white};
    color: ${COLORS.black};
  }
`;

export const WhiteButton = styled(BaseButton)`
  background-color: ${COLORS.white};
color: ${COLORS.black}
border: 1px solid ${COLORS.white}
  $:hover{
      border: 1px solid ${COLORS.red};

  }
  `;
