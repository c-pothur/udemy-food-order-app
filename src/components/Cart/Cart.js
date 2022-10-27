import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import AppContext from "../../Store/AppContext";

const Cart = (props) => {
  const appCtx = useContext(AppContext);

  return (
    <Modal onClose={props.onClose}>
      {console.log(appCtx)}
      {appCtx.cart.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          item={item}
        />
      ))}

      {/* <CartItem id="1" name="someting" price="11.78" amount="1" /> */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{appCtx.cart.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button - alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
