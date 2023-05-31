import { useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = (props) => {

  const confirmHandler = (event) => {
    console.log('add it to firebase');
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div >
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </div>
      <div >
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
      </div>
      <div >
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
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
