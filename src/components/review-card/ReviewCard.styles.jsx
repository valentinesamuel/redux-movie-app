import styled from "styled-components";

export const ReviewCardContainer = styled.div`
display:flex;
max-height:15%;
width:30%;
margin-right:3%;
padding:1%;
box-shadow: rgbox-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;ba(0, 0, 0, 0.1) 0px 4px 12px;
div{
    h3{
        margin-bottom:10px;
    }
}
`
 

export const ReviewerImage = styled.img`
width:15%;
height:auto;
object-fit:cover; 
border-radius:5px;
margin-right:1%;
padding: 1%;

`

export const Review = styled.p`
font-size:1.4rem;
display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`