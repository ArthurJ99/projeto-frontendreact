import { useEffect, useState } from "react";
import { FilterContainer } from "./filterStyled";

function Filter({ products, setProductList }) {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [name, setName] = useState("");

  const handleFilter = () => {
    if (name && minValue && maxValue) {
      setProductList(
        products.filter((item) => {
          return (
            item.name.toLowerCase().includes(name.toLowerCase()) &&
            item.value >= Number(minValue) &&
            item.value <= Number(maxValue)
          );
        })
      );
      return;
    }
    if (name) {
      if (minValue) {
        setProductList(
          products.filter((item) => {
            return (
              item.name.toLowerCase().includes(name.toLowerCase()) &&
              item.value >= Number(minValue)
            );
          })
        );
        return;
      }
      if (maxValue) {
        setProductList(
          products.filter((item) => {
            return (
              item.name.toLowerCase().includes(name.toLowerCase()) &&
              item.value <= Number(maxValue)
            );
          })
        );
        return;
      }
      setProductList(
        products.filter((item) => {
          return item.name.toLowerCase().includes(name.toLowerCase());
        })
      );
      return;
    }
    if (minValue) {
      if (maxValue) {
        setProductList(
          products.filter((item) => {
            return (
              item.value >= Number(minValue) && item.value <= Number(maxValue)
            );
          })
        );
        return;
      }
      setProductList(
        products.filter((item) => {
          return item.value >= Number(minValue);
        })
      );
      return;
    }
    if (maxValue) {
      setProductList(
        products.filter((item) => {
          return item.value <= Number(maxValue);
        })
      );
      return;
    }
    setProductList(products);
  };

  const cleanFilters = () => {
    setMinValue("");
    setMaxValue("");
    setName("");
  };

  useEffect(() => {
    handleFilter();
  }, [minValue, maxValue, name]);

  return (
    <FilterContainer>
      <h1>Filtros</h1>
      <label>
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={minValue}
          onChange={(e) => {
            setMinValue(e.target.value);
          }}
        />
      </label>
      <label>
        <p>Valor máximo:</p>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => {
            setMaxValue(e.target.value);
          }}
        />
      </label>
      <label>
        <p>Busca por nome:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <button onClick={cleanFilters}>Limpar Filtros</button>
    </FilterContainer>
  );
}

export default Filter;
