import styled from "styled-components";
import { COLORS, FONTWEIGHT } from "../../utilities/designTokens";

export const PersonCardContainer = styled.div`
width:10rem;
margin: 0 4% 0 0;
border-radius:5px;
padding: 1%;
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Picture = styled.img`
width:100%;
height:auto;
object-fit:contain;
margin-bottom:2px;
border-radius:5px;
`

export const Description = styled.div`
h4{
    margin-top:.6rem ;
display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    fons-size:1.4rem;
    font-weight:${FONTWEIGHT.semiBold};
    line-height:1.6rem;
}

p{
color: ${COLORS.red};
font-size:1.2rem;
display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`