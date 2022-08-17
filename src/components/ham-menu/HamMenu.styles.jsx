import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, DURATION, FONT, FONTWEIGHT } from "../../utilities/designTokens";
import Button from "../button/button.component";

export const HamMenuContainer = styled.div`
cursor:pointer;
display:none;
flex-direction:column;
div{
    background-color: ${COLORS.white};
    height:.1rem;
    margin:.3rem 0 0 .3rem;
}

@media only screen and (max-width: 30rem) {
    
    width:1.5rem;
    display:flex;
  }

  @media only screen and (max-width: 50rem) {
  }
`

export const HamMenuBody = styled.div`
justify-content:center;
width:12rem;
z-index:1;
top:3rem;
right:4%;
position:absolute;
display:flex;
flex-direction:column;

align-items:center;
padding:4%;

`

export const SignOutButton = styled(Button)``

export const NavLink = styled(Link)`
cursor: pointer;
text-decoration: none;
text-transform: uppercase;
font-family: "${FONT.poppins}";
color: ${COLORS.white};
font-weight: ${FONTWEIGHT.bold};
margin: 1rem 0 1rem 0;
transition: ${DURATION.point3};
&:hover{
    text-decoration:underline;
}

  @media only screen and (max-width: 30rem) {
  }

  @media only screen and (max-width: 50rem) {
  }
`;