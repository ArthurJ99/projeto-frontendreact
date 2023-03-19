import { ProductContainer } from "./productCardStyled";

export function ProductCard({ product, setCartItems, cartItems }) {
  const handleAddToCart = () => {
    if (
      cartItems.find((item) => {
        return product.id === item.id;
      })
    ) {
      const newCart = cartItems.map((p) => {
        if (p.id === product.id) {
          return { ...p, qnt: p.qnt + 1 };
        }
        return p;
      });
      setCartItems(newCart);
      localStorage.setItem("@cart", JSON.stringify(newCart));
    } else {
      const newCart = [
        ...cartItems,
        {
          ...product,
          qnt: 1,
        },
      ];

      setCartItems(newCart);
      localStorage.setItem("@cart", JSON.stringify(newCart));
    }
  };

  return (
    <ProductContainer>
      <figure>
        <img src={product.imageUrl} alt={product.name} />
        <figcaption>
          <p>{product.name}</p>
          <p>R$ {product.value.toFixed(2).replace(".", ",")}</p>
          <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </figcaption>
      </figure>
    </ProductContainer>
  );
}
