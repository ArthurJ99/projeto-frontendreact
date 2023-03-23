import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 2%;
  grid-column: 1 / span 1;
  width: 20vw;
  height: 70vh;

  p {
    margin: 4px;
  }

  button {
    width: 30%;
    margin-top: 5%;
  }
`;
