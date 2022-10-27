import MealItem from "./MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { useContext } from "react";
import AppContext from "../../Store/AppContext";

const AvailableMeals = (props) => {
  const appCtx = useContext(AppContext);
  const mealItems = appCtx.DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      {console.log(mealItems)}
      <Card>
        <ul>
          {appCtx.DUMMY_MEALS.map((meal) => (
            <MealItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
              key={meal.id}
              id={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
