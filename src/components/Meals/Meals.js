import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals error={props.error} isLoading={props.isLoading} DUMMY_MEALS={props.DUMMY_MEALS}/>
    </Fragment>
  );
};

export default Meals;
