import React, { createContext, useReducer } from "react";
import { CalcSaleValues } from "../utils/helper-functions";

export const CartContext = createContext({
  cartShowing: false,
  cartItems: [],
  price: 0,
  discount: 0,
  toggleCartShowing: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearFromCart: () => {},
});

const addItemToCart = (cartItems, itemToAdd) => {
  const alreadyAdded = cartItems.some((item) => item.name === itemToAdd.name);

  let newCartItems = [];

  if (alreadyAdded) {
    newCartItems = cartItems.reduce((prev, curr) => {
      if (curr.name === itemToAdd.name) {
        return [...prev, { ...curr, quantity: curr.quantity + 1 }];
      } else {
        return [...prev, curr];
      }
    }, []);
  } else {
    newCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
  }

  return newCartItems;
};

const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = [...cartItems];

  const index = cartItems.findIndex((item) => item.name === itemToRemove.name);

  if (index === -1) return;

  if (newCartItems[index].quantity === 1) {
    newCartItems.splice(index, 1);
  } else {
    newCartItems[index].quantity = newCartItems[index].quantity - 1;
  }

  return newCartItems;
};

const clearItemFromCart = (cartItems, itemToClear) => {
  const newCartItems = [...cartItems];

  const index = cartItems.findIndex((item) => item.name === itemToClear.name);

  if (index === -1) return;

  newCartItems.splice(index, 1);

  return newCartItems;
};

export const ACTION_TYPES = {
  UPDATE_CART: "UPDATE_CART",
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.UPDATE_CART:
      return { ...state, ...payload };

    case ACTION_TYPES.TOGGLE_CART_VISIBILITY:
      return { ...state, cartShowing: payload };

    default:
      throw new Error(`Action ${type} is not a valid action`);
  }
};

const INITIAL_STATE = {
  cartShowing: false,
  cartItems: [],
};

export function CartContextProvider({ children }) {
  const [{ cartItems, cartShowing, price, discount }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const executeAction = (cartItems) => {
    const { price, discount } = CalcSaleValues(cartItems);

    dispatch({
      type: ACTION_TYPES.UPDATE_CART,
      payload: { cartItems, price, discount },
    });
  };

  const toggleCartShowing = () =>
    dispatch({
      type: ACTION_TYPES.TOGGLE_CART_VISIBILITY,
      payload: !cartShowing,
    });

  const addToCart = (itemToAdd) =>
    executeAction(addItemToCart(cartItems, itemToAdd));

  const removeFromCart = (itemToRemove) =>
    executeAction(removeItemFromCart(cartItems, itemToRemove));

  const clearFromCart = (itemToClear) => {
    executeAction(clearItemFromCart(cartItems, itemToClear));
  };

  const value = {
    cartShowing,
    cartItems,
    price,
    discount,
    toggleCartShowing,
    addToCart,
    removeFromCart,
    clearFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
