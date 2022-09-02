import styled from "styled-components";
import { FONTWEIGHT } from "../../utilities/designTokens";

export const CardContainer = styled.div`
position:relative;
min-width:10rem;
margin: 0 4% 0 0;
border-radius:5px;
padding: 1%;
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

 @media only screen and (max-width: 30rem) {
  min-width:17rem;
   margin: 0 4% 0 0;
  }
  
  @media only screen and (max-width: 50rem) {
  }
`


export const MovieImage = styled.img`
width:100%;
border-radius:5px;
object-fit:contain;
`
export const Add = styled.img`
background-color:red;
border-radius:50%;
padding:7%;
cursor:pointer;
`

export const Details = styled.div`

`
export const Stats = styled.div`
display:flex;
justify-content:space-between;
`

export const Rating = styled.div`
display:flex;
align-items:center;

img{
    width:1.12rem;
    height:auto;
    margin-right:.5rem;
}
`

export const MovieTitle = styled.h3`
font-size:1.5rem;
cursor:pointer;
display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
text-decoration:none;
margin:1% 0;
    font-weight: ${FONTWEIGHT.semiBold};

    &:hover{
      text-decoration:underline;
    }
`

export const Description = styled.div`

p{ 
    line-height:1.5rem;

  display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

 @media only screen and (max-width: 30rem) {
   
  }

  @media only screen and (max-width: 50rem) {
  }
`
