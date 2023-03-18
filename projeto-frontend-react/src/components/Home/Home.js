import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { HomeContainer, HomeFooter, HomeHeadSelector } from "./homeStyled";

function Home() {
  return (
    <>
      <HomeContainer>
        <HomeHeadSelector>
          <p id="temporario">Produtos:</p>
          <p>Ordenação:</p>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </HomeHeadSelector>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </HomeContainer>
      <HomeFooter>
        <p>@ArthurJordi</p>
      </HomeFooter>
    </>
  );
}

export default Home;
