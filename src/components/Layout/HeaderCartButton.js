import { useContext } from "react";
import AppContext from "../../Store/AppContext";
import CartIcon from "../CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const appCtx = useContext(AppContext);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {appCtx.cart.items.reduce((currentNumber, item) => {
          return currentNumber + item.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
