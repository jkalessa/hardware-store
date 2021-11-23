import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [counter, setCounter] = useState(1);

  const handleCountUp = () => {
    setCounter(counter + 1);
  };

  const handleCountDown = () => {
    setCounter(counter - 1);
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
