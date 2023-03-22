import styled from "styled-components";

export const CartContainer = styled.div`
  /*   background-color: lightblue;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 10px 10px;
  grid-column: 3 / span 1;
  width: 20vw;
  height: 70vh;
  padding-left: 2%;
  line-height: 4rem;
  position: sticky;
  top: 0;

  .totalValue {
    position: relative;
    top: 20px;
  } */
  background-color: lightblue;
  width: 20vw;
  height: 70vh;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding-left: 2%;
  padding-top: 2%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;

  .totalValue {
    position: relative;
    top: 20px;
  }
`;
