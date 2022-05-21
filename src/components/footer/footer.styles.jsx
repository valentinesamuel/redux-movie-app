import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTWEIGHT, PAGEDIM } from "../../utilities/designTokens";

export const FooterContainer = styled.footer`
  background-color: ${COLORS.matteBlack};
  display: flex;
  padding: 6% 7%;
  justify-content: space-between;
`;

export const Instructions = styled.div``;

export const InstText = styled.h2`
  font-weight: ${FONTWEIGHT.semiBold};
  max-width: 45%;
  margin-bottom: 4%;
`;

export const Paragraph = styled.p`
  padding-bottom: ${PAGEDIM.horizontalPadding};
  &:hover {
    border-top: 1px solid red;
    width: max-content;
  }
`;

export const Links = styled.div`
  display: flex;
  color: ${COLORS.white};
  opacity: 0.7;

  div {
    width: max-content;
    display: flex;
    flex-direction: column;
    margin-left: 120px;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  margin: 10px 0;
`;

export const InternalLink = styled(Link)`
  text-decoration: none;
  padding: 10px 0;
`;
