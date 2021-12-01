import "./ItemList.css";
import Item from "../item/Item";

const ItemList = ({ datos }) => {
  return (
    <div className="contenedorItem">
      {datos.map((product) => {
        return <Item data={product} />;
      })}
    </div>
  );
};

export default ItemList;
