import { useState, useEffect } from 'react';

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

  const {getData, isLoading, error} = useHttp(setDUMMY_MEALS);

  useEffect(() => {
    getData({
      url: 'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json',
      type: 'GET',
    });
  }, [getData]);
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals error={error} isLoading={isLoading} DUMMY_MEALS={DUMMY_MEALS} />
      </main>
    </CartProvider>
  );
}

export default App;
