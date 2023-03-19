export function ItemCard({ item, setCartItems, cartItems }) {
  const handleRemoveItem = () => {
    if (item.qnt > 1) {
      const newCart = cartItems.map((p) => {
        if (p.id === item.id) {
          return { ...p, qnt: p.qnt - 1 };
        }
        return p;
      });
      setCartItems(newCart);
      localStorage.setItem("@cart", JSON.stringify(newCart));
    } else {
      const newCart = cartItems.filter((cartItem) => {
        return cartItem.id !== item.id;
      });
      setCartItems(newCart);
      if (newCart.length === 0) {
        localStorage.removeItem("@cart");
      } else {
        localStorage.setItem("@cart", JSON.stringify(newCart));
      }
    }
  };

  return (
    <>
      <p>X{item.qnt}</p>
      <p>{item.name}</p>
      <p>R$ {item.value.toFixed(2).replace(".", ",")}</p>
      <button onClick={handleRemoveItem}>remover</button>
    </>
  );
}
