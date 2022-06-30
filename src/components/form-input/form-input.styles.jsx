import styled, { css } from "styled-components";
import {
  BORDERRADIUS,
  COLORS,

  FONTSIZES,
} from "../../utilities/designTokens";

const shrinkLabelStyles = css`
  top: -4px;
  font-size: 12px;
  color: ${COLORS.white};
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;
  left: 1rem;
  font-size: ${FONTSIZES.p};
  top: 1.375rem;
  padding: 0 0.5rem;
  pointer-events: none;
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: ${COLORS.matteBlack};

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  border: 2px solid ${COLORS.grey};
  border-radius: ${BORDERRADIUS.fivepixel};
  font-size: ${FONTSIZES.p};
  color: ${COLORS.white};
  outline: none;
  padding: 1.25rem;
  background: none;
  width:100%;

  &:focus {
    border-color: ${COLORS.white};
  }
`;
