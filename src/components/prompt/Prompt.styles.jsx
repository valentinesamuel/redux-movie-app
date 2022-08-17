import styled from "styled-components";
import { COLORS } from "../../utilities/designTokens";

export const PromptMessage = styled.p`
font-size:1.7rem;
padding:1% 2%;
position:absolute;
top:10%;
left:45%;
width:max-content;
background-color:${COLORS.red};
border-radius:5rem;
`