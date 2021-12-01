import React from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import ItemCount from "../itemCount/ItemCount";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://cruce-app.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, 2000);
  }, []);

  return (
    <div>
      <div className="contenedorSaludo">
        <ItemList datos={products} />
      </div>
      <div>
        <ItemCount stock={5} initial={1} />
      </div>
    </div>
  );
};

export default ItemListContainer;
