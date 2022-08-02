import styled from "styled-components";
import { COLORS, FONTSIZES } from "../../utilities/designTokens";


export const HeaderContainer = styled.div`
background-color: ${COLORS.black};
position:relative;
padding:5rem 0 0 4%;
height:100%;
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
`

export const Tagline = styled.p`
width:30%;
border-left:4px solid ${COLORS.red};
padding-left: 1.25rem;
`

export const Title = styled.h1`
font-size:4rem;
margin: 1.8rem 0 1.8rem 0;
`

export const Description = styled.p`
font-size:1.5rem;
width:50%;
line-height:2rem;
`

export const GenreContainer = styled.div`
display:flex;

p{
    margin:3rem 2rem 0 0;
}
`

export const StatsContainer = styled.div`
display:flex;
margin: 1.8rem 0 0 0;
.year{
margin:0 2% 0 0;
}

.divider{
width:.3%;
background-color:red;
margin:0 2% 0 0;
}

.star{
    height:1%;
    width:1%;
    object-fit:contain;
    margin:0 .5% 0 0;
}

.rating{
    margin:0 3% 0 0;
}
`

export const ButtonContainer = styled.div`
display:flex;
width:30%;
justify-content:space-between;
margin: 2.5rem 0 0 0;
`

export const PictureSlides = styled.div`

.image{
    width:10%;
    height:auto;
    object-fit:contain;
    border-radius:5px;
    margin: 6rem 4rem 1rem 0;
}
`