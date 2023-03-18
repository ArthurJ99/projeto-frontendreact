import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: lightgreen;
  grid-column: 2 / span 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2.5vh 50vh 50vh;
  padding-left: 3%;
  border: 1px solid black;
  height: 107vh;
`;

export const HomeHeadSelector = styled.div`
  width: 100%;
  display: flex;
  grid-column: 1 / span 3;
  justify-content: right;
`;

export const HomeFooter = styled.footer`
  background-color: greenyellow;
  width: 100%;
  grid-row: 2/3;
  grid-column: 1/4;
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
