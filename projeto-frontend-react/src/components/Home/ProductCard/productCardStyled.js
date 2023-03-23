import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: lightblue;
  height: 26%;
  width: 25%;
  min-height: 50vh;
  border: 1px solid black;
  border-radius: 5px;
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
      border-bottom: 1px solid black;
      border-radius: 5px 5px 0 0;
    }

    figCaption {
      line-height: 2rem;
      display: flex;
      flex-direction: column;
      margin: 1rem 0.9rem;

      button {
        width: 70%;
        margin: 2rem;
        margin-top: 3rem;
      }
    }
  }
`;
