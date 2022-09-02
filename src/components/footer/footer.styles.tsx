import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTWEIGHT } from "../../utilities/designTokens";

export const FooterContainer = styled.footer`
  display: flex;
  padding: 6% 7%;
  width:100%;
  justify-content: space-between;

  @media only screen and (max-width: 30rem) {
    flex-direction: column;
    justify-centent: flex-start;
  }

  @media only screen and (max-width: 50rem) {
    flex-direction: column;
  }
`;

export const Instructions = styled.div`
width:20%;

@media only screen and (max-width: 30rem){
width:100%;
}

@media only screen and (max-width: 50rem){
width:100%;
margin:6% 0;
}
`;

export const InstText = styled.h2`
  font-weight: ${FONTWEIGHT.semiBold};
  margin-bottom: 4%;
@media only screen and (max-width: 30rem) {
    max-width: 100%;
    margin: 1rem 0;
  }
`;

export const Paragraph = styled.p`
  padding-bottom: 2%;
  &:hover {
    border-top: 1px solid red;
    width: max-content;
  }
`;


export const Links = styled.div`
display:flex;
flex-direction:column;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  margin: 0.625rem 0;
  color: ${COLORS.white};
cursor:pointer;

  &:hover{

    text-decoration:underline;
  }
`;



export const InternalLink = styled(Link)`
  text-decoration: none;
  padding: 0.625rem 0;
`;
