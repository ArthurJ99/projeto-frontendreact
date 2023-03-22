import React from "react";
import { ItemCard } from "./Items/Items";
import { CartContainer } from "./cartStyled";


function Cart({ cartItems, setCartItems,trashIcon }) {
  const calculateTotal = () => {
    const itemsValues = cartItems.map((item) => {
      return item.qnt * item.value;
    });
    const totalValue = itemsValues.reduce((cur, acc) => {
      return cur + acc;
    }, 0);
    return totalValue;
  };

  return (
    <CartContainer>
      <h1>Carrinho</h1>
      {cartItems.map((item) => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            setCartItems={setCartItems}
            cartItems={cartItems}
            trashIcon={trashIcon}
          />
        );
      })}
      <p className="totalValue">Valor Total: R$ {calculateTotal().toFixed(2).replace(".", ",")}</p>
    </CartContainer>
  );
}

export default Cart;
