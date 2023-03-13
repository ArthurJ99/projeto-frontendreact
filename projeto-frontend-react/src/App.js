import "./App.css";
import React from "react";
import Filter from "./components/Filtro/Filter";
import Home from "./components/Home/Home";
import Cart from "./components/Carrinho/Cart";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const MainContainer = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <MainContainer>
      <GlobalStyled />
      <Filter />
      <Home />
      <Cart />
    </MainContainer>
  );
}

export default App;
