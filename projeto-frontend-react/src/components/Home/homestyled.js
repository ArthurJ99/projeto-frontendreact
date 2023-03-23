import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 1% 2%;
  width: 60vw;
  min-height: 100vh;

  .homePage {
    display: flex;
    width: 60vw;
    flex-wrap: wrap;
  }
`;

export const HomeHeadSelector = styled.div`
  width: 100%;
  display: flex;
  grid-column: 1 / span 3;
  justify-content: space-between;

  .order {
    display: flex;
    gap: 5px;
    margin-right: 5%;

    select {
      height: 25px;
    }
  }
`;

/* export const HomeFooter = styled.footer`
  background-color: lightgray;
  width: 100%;
  height: 20px;
  grid-row: 2/3;
  grid-column: 1/4;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;

  p {
    color: lightblue;
  }
`; */
