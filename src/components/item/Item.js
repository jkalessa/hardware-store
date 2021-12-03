import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";
import ButtonList from "../buttonList/ButtonList";

const Item = ({ data }) => (
  <Card>
    <Image src={data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Description>{data.price}</Card.Description>
      <div className="contenedorBoton">
        <ButtonList></ButtonList>
      </div>
    </Card.Content>
  </Card>
);

export default Item;
