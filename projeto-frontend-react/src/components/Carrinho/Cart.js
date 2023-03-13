import React from "react";
import { Items } from "./Items/Items";
import { CartContainer } from "./cartStyled";

function Cart() {
  return (
    <CartContainer>
      <p>Cart</p>
      <Items />
    </CartContainer>
  );
}

export default Cart;
