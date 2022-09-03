import styled from "styled-components";
import {  FONTSIZES } from "../../utilities/designTokens";

export const FeedContainer = styled.div`
color:white;
padding 0 0 0 4%;
`

export const Category = styled.div`
h2{
 font-size: ${FONTSIZES.h2};
 padding: 3rem 0 1.2rem 0;
}
`

export const MovieRowContainer = styled.div`
display:flex;
overflow-x: scroll;

&::-webkit-scrollbar {
  display: none;
}
`