const defaultCartState = {
  items: [],
  totalAmount: 0.0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      if (
        state.items.filter((item) => item.id == action.payload.id).length > 0
      ) {
        let newItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + action.payload.amount };
          } else {
            return { ...item };
          }
        });

        return {
          items: newItems,
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.amount,
        };
      } else {
        return {
          items: [...state.items, action.payload],
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.amount,
        };
      }
    }
    case "REMOVE_ITEM": {
      let oldItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          console.log({ amount: item.amount - 1 });
          return { ...item, amount: item.amount - 1 };
        } else {
          console.log("else", item.id, action.payload.id);
          return { ...item };
        }
      });
      let newItems = oldItems.filter((item) => item.amount > 0);
      console.log(oldItems, newItems, { ...state, items: newItems });
      return {
        ...state,
        items: newItems,
        totalAmount: parseFloat(
          state.totalAmount - action.payload.price
        ).toFixed(2),
      };
    }
    case "ROUND_TOTAL": {
      console.log(action.payload, state.totalAmount);
      return { ...state, totalAmount: action.payload };
    }
    default:
      return state;
  }
};
const addToCartAction = (item) => {
  return { type: "ADD_ITEM", payload: item };
};
const removeItemAction = (id) => {
  return { type: "REMOVE_ITEM", payload: id };
};
const roundTotalAction = (amount) => {
  return { type: "ROUND_TOTAL", payload: amount };
};
export {
  cartReducer,
  addToCartAction,
  removeItemAction,
  defaultCartState,
  roundTotalAction,
};
