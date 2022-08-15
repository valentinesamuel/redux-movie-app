import styled from "styled-components";

export const ReviewRowContainer = styled.div`
display:flex;
overflow-x: scroll;

&::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 30rem) {
flex-direction:column;

}

@media only screen and (max-width: 50rem) {
      flex-direction:column;
  
}
`