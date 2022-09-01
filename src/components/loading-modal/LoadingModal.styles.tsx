import styled from "styled-components";
import { BORDERRADIUS, COLORS, FONTSIZES } from "../../utilities/designTokens";

export const LoadingModalContainer = styled.div`
display:grid;
place-items:center;
background-color: rgba(0, 0, 0, 0.95);
position:absolute;
top:0;
height:100%;
width:100%;
z-index:2;
`

export const LoadingModalCard = styled.div`
display:flex;
height: fit-content;
border-radius:${BORDERRADIUS.fivepixel};
flex-direction:column;
align-items:center;
width:60%;
padding:4%;
background-color:${COLORS.black};
`

export const Message = styled.p`
background-color:transparent;
font-size: ${FONTSIZES.h4};
margin-top:10%;
`