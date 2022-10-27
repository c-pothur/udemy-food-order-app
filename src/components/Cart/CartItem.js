import { useContext } from "react";
import AppContext from "../../Store/AppContext";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const appCtx = useContext(AppContext);
  const addHandler = () => {
    let item = { ...props.item };
    item.amount = 1;
    appCtx.addItem(item);
  };
  const removeHandler = () => {
    appCtx.removeItem(props.item);
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeHandler}>−</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
