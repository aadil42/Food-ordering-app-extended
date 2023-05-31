import {useState,  useRef} from 'react';

// get custom hooks
import useInput from '../Custom-hooks/useInput';

import classes from './Checkout.module.css';
const validateTextInput = (text) => {
    return text.trim() !== '';
}
const Checkout = (props) => {
    const [nameError, setNameError] = useState(false);
    const [streetError, setStreetError] = useState(false);
    const [postalError, setPostalError] = useState(false);
    const [cityError, setCityError] = useState(false);

    const [isSubmitTouched, setIsSubmitTouched] = useState(false);

    const nameInput = useRef(null);
    const streetInput = useRef(null);
    const postalInput = useRef(null);
    const cityInput = useRef(null);

  const confirmHandler = (event) => {
    console.log('add it to firebase');
    event.preventDefault();
    setIsSubmitTouched(true); // consider submit button is touched.
    
    !validateTextInput(nameInput.current.value) ? setNameError(true) : setNameError(false);
    !validateTextInput(streetInput.current.value) ? setStreetError(true) : setStreetError(false);
    !validateTextInput(postalInput.current.value) ? setPostalError(true) : setPostalError(false);
    !validateTextInput(cityInput.current.value) ? setCityError(true) : setCityError(false);
  };

  let isFormValid = false;

  isFormValid = !nameError && !streetError && !postalError && !cityError;
  const formError = !isFormValid && isSubmitTouched;

  const nameClass = `${classes.control} ${
    !nameError ? '' : classes.invalid
  }`;

  const streetClass = `${classes.control} ${
    !streetError ? '' : classes.invalid
  }`;

  const postalClass = `${classes.control} ${
    !postalError ? '' : classes.invalid
  }`;

  const cityClass = `${classes.control} ${
    !cityError ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInput} type='text' id='name' />
        {nameError && <p className={classes.red_text}>Name must not be empty</p>}
      </div>
      <div className={streetClass} >
        <label htmlFor='street'>Street</label>
        <input ref={streetInput} type='text' id='street' />
        {streetError && <p className={classes.red_text}>Street must not be empty</p>}
      </div>
      <div className={postalClass} >
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalInput} type='text' id='postal' />
        {postalError && <p className={classes.red_text}>Postal must not be empty</p>}
      </div>
      <div className={cityClass} >
        <label htmlFor='city'>City</label>
        <input ref={cityInput} type='text' id='city' />
        {cityError && <p className={classes.red_text}>City must not be empty</p>}
      </div>
      <div >
        <button type='button' onClick={props.onClose}>
          Cancel
        </button>
        <button >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
