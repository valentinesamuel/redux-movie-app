import styled from "styled-components";

export const CardContainer = styled.div`
position:relative;
margin: 0 7% 0 0;
border-radius:5px;
min-width:15rem;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

 @media only screen and (max-width: 30rem) {
   min-width:12rem;
  }

  @media only screen and (max-width: 50rem) {
  }
`


export const MovieImage = styled.img`
width:100%;
object-fit:contain;
`
export const Add = styled.img`
background-color:red;
border-radius:50%;
padding:7%;

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

export const MovieTitle = styled.h4`
font-size:1.5rem;
    overflow: hidden;
      white-space: nowrap;
text-overflow: ellipsis;
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
