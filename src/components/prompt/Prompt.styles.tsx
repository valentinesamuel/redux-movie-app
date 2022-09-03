import styled from "styled-components";
import { COLORS } from "../../utilities/designTokens";

export const PromptMessage = styled.p`
font-size:1.3rem;
padding:.5% 1.2%;
position:sticky;
top:15%;
left:45%;
width:max-content;
background-color:${COLORS.red};
border-radius:5rem;
z-index:1;
`