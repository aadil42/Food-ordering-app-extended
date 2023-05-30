import { useState, useEffect, useCallback } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


// importing custom hook 
import useHttp from './components/Custom-hooks/useHttp';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const {getData} = useHttp(setDUMMY_MEALS);

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
