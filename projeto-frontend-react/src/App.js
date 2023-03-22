import "./App.css";
import React, { useState } from "react";
import Filter from "./components/Filtro/Filter";
import Home from "./components/Home/Home";
import Cart from "./components/Carrinho/Cart";
import styled, { createGlobalStyle } from "styled-components";
import { HomeFooter } from "./components/Home/homeStyled";
import astroBlue from "./assets/astro-blue.jpg";
import astroNasa from "./assets/astro-nasa.jpg";
import astroSaber from "./assets/astro-saber.jpg";
import astroSkate from "./assets/astro-skate.jpg";
import balancoNaLua from "./assets/balanco-na-lua.jpg";
import luaCrescente from "./assets/lua-crescente.jpg";
import astroFlowers from "./assets/astro-flowers.jpg";
import trashIcon from "./assets/lixeira.png";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const MainContainer = styled.main`
  display: flex;
`;

const HeaderContainer = styled.header`
  height: 6vh;
  width: 100%;
  padding-left: 10%;
  border: 1px solid black;
`;

const BodyContainer = styled.body`
  background-image: url(https://images.hdqwalls.com/download/nebula-blue-space-1x-1920x1080.jpg);
  background-size: cover;
  height: 100%;
`;

function App() {
  const cartProducts = JSON.parse(localStorage.getItem("@cart"));

  const products = [
    {
      id: 1,
      name: "Camiseta - Astronauta",
      value: 100,
      imageUrl: astroBlue,
    },
    {
      id: 2,
      name: "Camiseta - NASA",
      value: 50,
      imageUrl: astroNasa,
    },
    {
      id: 3,
      name: "Camiseta - Sabre de Luz",
      value: 60,
      imageUrl: astroSaber,
    },
    {
      id: 4,
      name: "Camiseta - Skatista Espacial",
      value: 70,
      imageUrl: astroSkate,
    },
    {
      id: 5,
      name: "Camiseta - Balanço na Lua",
      value: 90,
      imageUrl: balancoNaLua,
    },
    {
      id: 6,
      name: "Camiseta - Lua Crescente",
      value: 40,
      imageUrl: luaCrescente,
    },
    {
      id: 7,
      name: "Camiseta - Flores",
      value: 30,
      imageUrl: astroFlowers,
    },
  ];

  const [productList, setProductList] = useState(
    products.sort((a, b) => {
      return a.value - b.value;
    })
  );

  const [cartItems, setCartItems] = useState(cartProducts ? cartProducts : []);

  return (
    <BodyContainer>
      <HeaderContainer>
        <h1>AstroCommerce</h1>
      </HeaderContainer>
      <MainContainer>
        <GlobalStyled />
        <Filter setProductList={setProductList} products={products} />
        <Home
          productList={productList}
          setProductList={setProductList}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
        <Cart
          setCartItems={setCartItems}
          cartItems={cartItems}
          trashIcon={trashIcon}
        />
      </MainContainer>
    </BodyContainer>
  );
}

export default App;
