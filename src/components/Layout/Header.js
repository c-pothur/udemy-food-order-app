import React from "react";
import classes from "./Header.module.css";
import mealesImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OrderFood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealesImage}
          alt="delicious meals"
        ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
