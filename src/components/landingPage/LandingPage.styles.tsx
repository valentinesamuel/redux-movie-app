import styled from "styled-components";
import { COLORS, FONTSIZES } from "../../utilities/designTokens";
import { BackgroundImageProps } from "../../utilities/types";
import Button from "../button/button.component";


export const HomeContainer = styled.div`
height:100%;
`;

export const HeaderSection = styled.header<BackgroundImageProps>`
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
  background-color:transparent;

`;

export const RedText = styled.span`
  color: ${COLORS.red};
   background-color: transparent;
`;

export const HeaderBody = styled.p`
  margin-bottom: 3.125rem;
  background-color:transparent;
`;

export const CtaButton = styled(Button)`
  padding-left: 2.1875rem;
  padding-right: 2.1875rem;
`;

export const WatchSection = styled.section`
  padding: 5% 4%;
  color:white;
  background-color:white;
`;

export const WatchText = styled.h2`
  color: ${COLORS.black};
  font-size: ${FONTSIZES.h3};
  width: 35%;
    background-color:white;


  @media only screen and (max-width: 30rem) {
    width: 100%;
  }

  @media only screen and (max-width: 50rem) {
  }
`;

export const WatchActionsContainer = styled.div`
  display: flex;
    background-color:white;
  justify-content: space-between;

  @media only screen and (max-width: 30rem) {
    flex-direction: column;
  }

  @media only screen and (max-width: 50rem) {
  }
`;
export const WatchAction = styled.div`
  text-align: center;
  width: 25%;
    background-color:white;

  padding: 5% 0 0 0;

  p,
  h2 {
    color: ${COLORS.black};
    margin-top: 6%;
      background-color:white;
width:100%;
    line-height: 1.3125rem;
  }

  @media only screen and (max-width: 30rem) {
    width: 100%;
    text-align: center;
  }
`;

export const Icon = styled.div`
  height: 30px;
  background-color:transparent;
`;
