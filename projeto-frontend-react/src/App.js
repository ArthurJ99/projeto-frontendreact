import "./App.css";
import React from "react"
import Filter from "./components/Filtro/Filter"
import Home from "./components/Home/Home"
import Cart from "./components/Carrinho/Cart"



function App() {
  return <div>
    <Filter/>
    <Home/>
    <Cart/>
  </div>;
}

export default App;
