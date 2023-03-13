import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: lightgreen;
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2.5vh 50vh 50vh;
  padding-left: 3%;
`;

export const HomeHeadSelector = styled.div`
  display: flex;
  grid-column: 1/span 3;
  justify-content: space-around;
`