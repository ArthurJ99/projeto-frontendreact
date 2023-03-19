import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { HomeContainer, HomeFooter, HomeHeadSelector } from "./homeStyled";

function Home({ productList, setProductList, setCartItems, cartItems }) {
  const orderCrescent = () => {
    const sortedList = productList.slice().sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    setProductList(sortedList);
  };

  const orderDecrescent = () => {
    const sortedList = productList.slice().sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      }
      if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    setProductList(sortedList);
  };

  return (
    <>
      <HomeContainer>
        <HomeHeadSelector>
          <p>Produtos:</p>
          <div className="order">
            <p>Ordenação:</p>
            <select
              onChange={(event) => {
                console.log(event.target.value);
                if (Number(event.target.value) === 1) {
                  console.log("oi");
                  orderCrescent();
                } else {
                  console.log("olá");
                  orderDecrescent();
                }
              }}
            >
              <option value={1}>Crescente</option>
              <option value={2}>Decrescente</option>
            </select>
          </div>
        </HomeHeadSelector>
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          );
        })}
      </HomeContainer>
      <HomeFooter>
        <p>@ArthurJordi</p>
      </HomeFooter>
    </>
  );
}

export default Home;
