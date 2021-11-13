import React from "react";
import "./CartWidget.css";
import { Icon } from "semantic-ui-react";

const CartWidget = () => {
  return (
    <div className="carrito">
      <Icon name="cart arrow down" size="large" />
    </div>
  );
};

export default CartWidget;
