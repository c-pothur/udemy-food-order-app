import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useContext, useRef } from "react";
import AppContext from "../../Store/AppContext";
const MealItemForm = (props) => {
  const appCtx = useContext(AppContext);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const item = appCtx.DUMMY_MEALS.filter((item) => item.id === props.id)[0];

    item.amount = parseInt(inputRef.current.value);
    appCtx.addItem(item);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amout"
        input={{
          type: "number",
          id: props.id,
          min: "1",
          max: "5",
          steps: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <button type="submit">+Add</button>
      </div>
    </form>
  );
};
export default MealItemForm;
