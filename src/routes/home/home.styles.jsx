import { Fragment } from "react";
import styled from "styled-components";
import Button from "../../components/button/button.component";
import { COLORS, FONTSIZES, PAGEDIM } from "../../utilities/designTokens";

export const HomeContainer = styled.div`
padding: 0px ;
`

export const HeaderSection = styled.header`
  padding: 10% 0 10% ${PAGEDIM.horizontalPadding};
  background-image: linear-gradient(
      5deg,
      rgba(0, 0, 0, 0.6474964985994398) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderText = styled.h1`
  font-size: ${FONTSIZES.h1};
  padding-bottom: 20px;
  max-width: 50%;
`;

export const RedText = styled.span`
  color: ${COLORS.red};
`;

export const HeaderBody = styled.p`
  margin-bottom: 50px;
  opacity: 80%;
`;

export const CtaButton = styled(Button)`
  padding-left: 35px;
  padding-right: 35px;
`;

export const WatchSection = styled.section`
  padding: 5% ${PAGEDIM.horizontalPadding};
`;

export const WatchText = styled.h2`
  color: ${COLORS.black};
  font-size: ${FONTSIZES.h3};
  width: 35%;
  `;
  
  export const WatchActionsContainer = styled.div`
  display: flex;
  justify-content:space-between;
`;
export const WatchAction = styled.div`
  max-width: 15%;
  padding: 5% 0 0 0;

  p,
  h2 {
    color: ${COLORS.black};
    margin-top: 6%;
    line-height:21px;
  }
`;
