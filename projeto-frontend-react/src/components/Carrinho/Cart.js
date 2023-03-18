import React from "react";
import { Items } from "./Items/Items";
import { CartContainer } from "./cartStyled";

function Cart() {
  return (
    <CartContainer>
      <h1>Carrinho</h1>
      <Items />
    </CartContainer>
  );
}

export default Cart;
