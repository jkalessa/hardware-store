import React, { Fragment } from "react";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer greetings="Bienvenido" />
    </Fragment>
  );
}

export default App;
