import { useState, useEffect, useCallback } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const getData = useCallback(async () => {
    try {
      const url = 'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json';
      let response = await fetch(url);
      response = await response.json();

      // converting obj to array
      response = Object.keys(response).map(key => response[key]);

      setDUMMY_MEALS(response);
    } catch(error){
      alert(error.message,'this is from catch block');
    }
  }, []);

  useEffect(() => {
     getData();
  }, [getData]);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals DUMMY_MEALS={DUMMY_MEALS} />
      </main>
    </CartProvider>
  );
}

export default App;
