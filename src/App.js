import React, { Fragment } from "react";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer greetings="Bienvenido" />
      <ItemCount />
    </Fragment>
  );
}

export default App;
