import styled from "styled-components";
import { COLORS } from "../../utilities/designTokens";

export const PersonCardContainer = styled.div`
min-width:10rem;
margin: 0 4% 0 0;
border-radius:5px;
padding: 1%;
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`

export const Picture = styled.img`
width:100%;
object-fit:cover;
margin-bottom:2px;
border-radius:5px;
`

export const Description = styled.div`
h4{
    margin-top:.6rem;
display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

p{
color: ${COLORS.red};
}
`