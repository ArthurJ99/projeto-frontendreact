import "./App.css";
import React, { useState } from "react";
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
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: 96vh 6vh;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const cartProducts = JSON.parse(localStorage.getItem("@cart"));

  const products = [
    {
      id: 1,
      name: "produto 1",
      value: 10000,
      imageUrl: "https://picsum.photos/300/335?a=1",
    },
    {
      id: 2,
      name: "Exemplo 2",
      value: 5000,
      imageUrl: "https://picsum.photos/300/335?a=2",
    },
    {
      id: 3,
      name: "Item 3",
      value: 500,
      imageUrl: "https://picsum.photos/300/335?a=3",
    },
  ];

  const [productList, setProductList] = useState(
    products.sort((a, b) => {
      return a.value - b.value;
    })
  );

  const [cartItems, setCartItems] = useState(cartProducts ? cartProducts : []);

  return (
    <MainContainer>
      <GlobalStyled />
      <Filter setProductList={setProductList} products={products} />
      <Home
        productList={productList}
        setProductList={setProductList}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
      <Cart setCartItems={setCartItems} cartItems={cartItems} />
    </MainContainer>
  );
}

export default App;
