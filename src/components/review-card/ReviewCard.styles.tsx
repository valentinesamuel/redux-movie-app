import styled from "styled-components";
import { COLORS } from "../../utilities/designTokens";

export const ReviewCardContainer = styled.div`
min-height:15%;
padding:1%;
width:15%;  
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
div{
    border-radius:10px;
    h3{
        margin-bottom:10px;
        color: ${COLORS.red};
display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
}
  

@media only screen and (max-width: 30rem) {
width:100%;
margin-right:0%;
margin:2% 0;
}

@media only screen and (max-width: 50rem) {
  
}
`


export const ReviewerImage = styled.img`
min-width:100%;
height:auto;
object-fit:cover; 
border-radius:5px;
margin-right:1%;
padding: 1%;

`

export const ReviewContent = styled.p`
font-size:1rem;
line-height:1.5rem;
display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`