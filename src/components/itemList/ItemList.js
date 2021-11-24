import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../item/Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://cruce-app.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }, 2000);
  }, []);

  return (
    <div className="contenedorItem">
      {products.map((product) => {
        return <Item data={product} />;
      })}
    </div>
  );
};

export default ItemList;
