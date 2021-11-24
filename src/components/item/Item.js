import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ data }) => (
  <Card>
    <Image src={data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Description>{data.price}</Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
