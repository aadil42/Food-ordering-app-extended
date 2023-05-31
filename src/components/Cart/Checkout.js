import {useState,  useRef} from 'react';

// get custom hooks
// import useInput from '../Custom-hooks/useInput';

import classes from './Checkout.module.css';
const validateTextInput = (text) => {
    return text.trim() !== '';
}
const Checkout = (props) => {
    const [nameError, setNameError] = useState(false);
    const [streetError, setStreetError] = useState(false);
    const [postalError, setPostalError] = useState(false);
    const [cityError, setCityError] = useState(false);

    const nameInput = useRef(null);
    const streetInput = useRef(null);
    const postalInput = useRef(null);
    const cityInput = useRef(null);

  const confirmHandler = (event) => {
    event.preventDefault();

     const isNameValid = validateTextInput(nameInput.current.value);
     const isStreetValid = validateTextInput(streetInput.current.value);
     const isPostalValid = validateTextInput(postalInput.current.value);
     const isCityValid = validateTextInput(cityInput.current.value);

    !isNameValid ? setNameError(true): setNameError(false);
    !isStreetValid ? setStreetError(true) : setStreetError(false);
    !isPostalValid ? setPostalError(true) : setPostalError(false);
    !isCityValid ? setCityError(true) : setCityError(false);

    const isFormValid = isNameValid && isStreetValid && isPostalValid && isCityValid;
    // if the form is not valid then just stop and return;
    if(!isFormValid) return;
    props.onConfirm({
        name: nameInput.current.value,
        street: streetInput.current.value,
        postal: postalInput.current.value,
        city: cityInput.current.value
    });
  };

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
