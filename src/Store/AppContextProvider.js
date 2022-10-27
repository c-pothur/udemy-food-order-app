import { useReducer, useEffect } from "react";
import * as Store from "./Store";
import AppContext from "./AppContext";

const AppContextProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(
    Store.cartReducer,
    Store.defaultCartState
  );
  const addItemHandler = (item) => {
    cartDispatcher(Store.addToCartAction(item));
  };
  const removeItemHandler = (id) => {
    cartDispatcher(Store.removeItemAction(id));
  };
  const appContext = {
    cart: cartState,
    DUMMY_MEALS: [
      {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
      },
      {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
      },
      {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
      },
      {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
      },
    ],
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  useEffect(() => {
    console.log(
      "useeffect",
      cartState.totalAmount,
      parseFloat(cartState.totalAmount).toFixed(2)
    );
    cartDispatcher(
      Store.roundTotalAction(parseFloat(cartState.totalAmount.toFixed(2)))
    );
  }, [cartState.totalAmount]);
  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
