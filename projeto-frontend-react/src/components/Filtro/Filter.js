import { FilterContainer } from "./filterStyled";

function Filter() {
  return (
    <FilterContainer>
      <h2>Filters</h2>
      <label>
        <p>Valor mínimo:</p>
        <input type="number" />
      </label>
      <label>
        <p>Valor máximo:</p>
        <input type="number" />
      </label>
      <label>
        <p>Busca por nome:</p>
        <input type="text" />
      </label>
    </FilterContainer>
  );
}

export default Filter;
