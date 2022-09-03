import styled from "styled-components";
import { COLORS, FONTSIZES } from "../../utilities/designTokens";

type DetailsPageProps = {
  imageUrl: string
}

export const DetailsContainer = styled.div<DetailsPageProps>`
position:relative;
padding:5% 0 2% 4%;
height:100%;
background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),${({ imageUrl }) => `url(${imageUrl})`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;


  @media only screen and (max-width: 30rem) {
   padding:5% 4% 2% 4%;
  }

  @media only screen and (max-width: 50rem) {
  }
`

export const AdultContent = styled.div`
background-color:${COLORS.red};
color:${COLORS.white};
padding:1%;
width:max-content;
position:absolute;
top:10%;
right:0;
font-size : ${FONTSIZES.h5};

 @media only screen and (max-width: 30rem) {
padding:2%;
top:3%;
  }

  @media only screen and (max-width: 50rem) {
  }
`

export const Tagline = styled.p`
width:30%;
background: transparent;
border-left:4px solid ${COLORS.red};
padding-left: 1.25rem;

 @media only screen and (max-width: 30rem) {
width:40%;
line-height:1.4rem;
}

  @media only screen and (max-width: 50rem) {
  }
`

export const OutlineTitle = styled.h1`
background:transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: .5px;
  font-size:12rem;
  position absolute;
  opacity:0.2;
top:0;
right:0;
   @media only screen and (max-width: 30rem) {
display:none;
}

@media only screen and (max-width: 50rem) {
    display:none;
  }
`

export const Title = styled.h1`
font-size:4rem;
background: transparent;
margin: 1.8rem 0 1.8rem 0;
  @media only screen and (max-width: 30rem) {
 font-size:2rem;
margin: 3rem 0 1rem 0;  }

  @media only screen and (max-width: 50rem) {
  }
`

export const Description = styled.p`
font-size:1.5rem;
width:50%;
background: transparent;
line-height:2rem;

  @media only screen and (max-width: 30rem) {
width:100%;
font-size:1.2rem;
  }

  @media only screen and (max-width: 50rem) {
  }
`

export const GenreContainer = styled.div`
display:flex;
background: transparent;
p{
    margin:3rem 2rem 0 0;
    background: transparent;
}
`

export const StatsContainer = styled.div`
display:flex;
margin: 1.8rem 0 0 0;
background: transparent;
.year{
  background: transparent;
margin:0 2% 0 0;
}

.divider{
width:.3%;
background: transparent;
margin:0 2% 0 0;
background-color:red;
  @media only screen and (max-width: 30rem) {
width:.5%;
margin:0 3% 0 2%;
  }
}

.star{
    height:1%;
    width:1%;
    background: transparent;
    object-fit:contain;
    margin:0 .5% 0 0;
  @media only screen and (max-width: 30rem) {
   height:4%;
    width:4%;
        margin:0 .8% 0 0;
  }
    
}

.votes{
  background: transparent;
}

.rating{
  background: transparent;
    margin:0 3% 0 0;
}
`

export const ButtonContainer = styled.div`
display:flex;
width:30%;
background: transparent;
justify-content:space-between;
margin: 2.5rem 0 0 0;


@media only screen and (max-width: 30rem) {
    width:100%;
    justify-content:flex-start;
    .leftbtn{
    margin-right:2.2rem;
    }
  }

  @media only screen and (max-width: 50rem) {
    width:50%;
  }
`

export const PictureSlides = styled.div`
flex-wrap: no-wrap;
display:flex;
background: transparent;
.image{
    width:10%;
    height:auto;
    background: transparent;
    object-fit:contain;
    border-radius:5px;
    margin: 6rem 4rem 1rem 0;

    @media only screen and (max-width: 30rem) {
        margin: 3rem 1rem 1rem 0;
            width:90%;
  }

  @media only screen and (max-width: 50rem) {
  }
}
  @media only screen and (max-width: 30rem) {
    display:flex;
    overflow-x:scroll;
  }

  @media only screen and (max-width: 50rem) {
  }
`

export const Category = styled.div`
h2{
 font-size: ${FONTSIZES.h2};
 padding: 3rem 0 1.2rem 0;

 span{
  color:${COLORS.red};
 }
 @media only screen and (max-width: 30rem) {
  font-size: ${FONTSIZES.h3};
  }
}
margin-left:2%;

`

export const ErrorContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:20% 0;
`

export const Message = styled.p`
font-size: ${FONTSIZES.h5};
margin-top: 8%;
`