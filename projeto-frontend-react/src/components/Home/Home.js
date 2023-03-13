import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { HomeContainer, HomeHeadSelector } from "./homeStyled";

function Home() {
  return (
    <HomeContainer>
      <HomeHeadSelector>
        <p>Produtos:</p>
        <p>Ordenação:</p>
        <select>
          <option value>Crescente</option>
        </select>
      </HomeHeadSelector>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </HomeContainer>
  );
}

export default Home;
