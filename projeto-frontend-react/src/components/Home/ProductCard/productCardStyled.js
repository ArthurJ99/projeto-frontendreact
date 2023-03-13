import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: lightgray;
  height: 90%;
  width: 75%;
  border: 1px solid black;
  margin: 4%;
  display: grid;
  grid-template-rows: 70% 3% 3% 3%;
  grid-template-columns: 100%;

  figure {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100%;

    img {
      height: 100%;
      border: 1px solid black;
    }

    figCaption {
      line-height: 2rem;
    }

    button {
      justify-self: center;
    }
  }
`;
