import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = (props) => {

  const mealsList = props.DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {props.isLoading && !props.error && <p> Loading... </p>}
        {!props.isLoading && !props.error && <ul>{mealsList}</ul>} 
        {!props.isLoading && props.error && <p>something went wrong</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
