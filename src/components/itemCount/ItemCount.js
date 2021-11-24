import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const handleCountUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleCountDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="centrarContenido">
      <div className="ordenarHorizontal">
        <button className="anchoBoton" onClick={handleCountDown}>
          -
        </button>
        <p className="anchoParrafo">{counter}</p>
        <button className="anchoBoton" onClick={handleCountUp}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
