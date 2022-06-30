import styled from "styled-components";
import { COLORS, FONTSIZES } from "../../utilities/designTokens";
import Button from "../button/button.component";

export const HomeContainer = styled.div`

`;

export const HeaderSection = styled.header`
padding: 10% 0 10% 4%;
background-image: linear-gradient(
  5deg,
  rgba(0, 0, 0, 0.6474964985994398) 100%,
      rgba(0, 0, 0, 1) 100%
      ),
      ${({ imageUrl }) => `url(${imageUrl})`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      `;
      
      export const HeaderText = styled.h1`
  font-size: ${FONTSIZES.h1};
  padding-bottom: 1.25rem;
  max-width: 50%;

`;

export const RedText = styled.span`
  color: ${COLORS.red};
`;

export const HeaderBody = styled.p`
  margin-bottom: 3.125rem;
`;

export const CtaButton = styled(Button)`
  padding-left: 2.1875rem;
  padding-right: 2.1875rem;
`;

export const WatchSection = styled.section`
  padding: 5% 4%;
  color:white;
`;

export const WatchText = styled.h2`
  color: ${COLORS.black};
  font-size: ${FONTSIZES.h3};
  width: 35%;

  @media only screen and (max-width: 30rem) {
    width: 100%;
  }

  @media only screen and (max-width: 50rem) {
  }
`;

export const WatchActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 30rem) {
    flex-direction: column;
  }

  @media only screen and (max-width: 50rem) {
  }
`;
export const WatchAction = styled.div`
  text-align: center;
  width: 15%;
  padding: 5% 0 0 0;

  p,
  h2 {
    color: ${COLORS.black};
    margin-top: 6%;
    line-height: 1.3125rem;
  }

  @media only screen and (max-width: 30rem) {
    width: 100%;
    text-align: center;
  }
`;

export const Icon = styled.div`
  height: 30px;
`;
