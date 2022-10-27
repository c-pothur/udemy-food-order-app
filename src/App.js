import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isModelShown, setIsModelShown] = useState();

  const showModelHandler = () => {
    setIsModelShown(true);
  };
  const closeModelHandler = () => {
    setIsModelShown(false);
  };
  return (
    <div>
      {isModelShown && <Cart onClose={closeModelHandler} />}
      <Header onShowCart={showModelHandler} />
      <Meals />
    </div>
  );
}

export default App;
