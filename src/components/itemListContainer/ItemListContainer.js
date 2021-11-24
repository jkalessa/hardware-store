import React from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import ItemCount from "../itemCount/ItemCount";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <div className="contenedorSaludo">
        <ItemList />
      </div>
      <div>
        <ItemCount stock={5} initial={1} />
      </div>
    </div>
  );
};

export default ItemListContainer;
