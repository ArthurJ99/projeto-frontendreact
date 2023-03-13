import { ProductContainer } from "./productCardStyled";
import ImagemTeste from "../../../assets/camiseta-camisa-personalizada-astronauta-universo-espaco-hd6-espaco.jpg"


export function ProductCard() {
  return (
    <ProductContainer>
      <figure>
        <img src={ImagemTeste}/>
        <figcaption>
          <p>Nome do Produto</p>
          <p>Valor</p>
          <button>Adicionar ao Carrinho</button>
        </figcaption>
      </figure>
    </ProductContainer>
  );
}
