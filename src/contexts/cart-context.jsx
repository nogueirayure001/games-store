import { createContext, useState } from "react";

export const CartContext = createContext({
  cartShowing: false,
  toggleCartShowing: () => {},
  cartItems: [],
  addToCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartShowing, setCartShowing] = useState(false);

  const addItemToCart = (items, itemToAdd) => {
    const alreadyAdded = items.some((item) => item.name === itemToAdd.name);

    if (alreadyAdded) {
      const itemsCopy = items.reduce((prev, curr) => {
        if (curr.name === itemToAdd.name) {
          return [...prev, { ...curr, quantity: curr.quantity + 1 }];
        } else {
          return [...prev, curr];
        }
      }, []);

      setCartItems(itemsCopy);
    } else {
      setCartItems([...items, { ...itemToAdd, quantity: 1 }]);
    }
  };

  const value = {
    cartShowing: cartShowing,
    toggleCartShowing: () => setCartShowing(!cartShowing),
    cartItems: cartItems,
    addToCart: (itemToAdd) => addItemToCart(cartItems, itemToAdd),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
