import { CART_ACTIONS } from "./cart.types";

const INITIAL_STATE = {
  cartShowing: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.UPDATE_CART:
      return { ...state, ...payload };

    case CART_ACTIONS.TOGGLE_CART_VISIBILITY:
      return { ...state, cartShowing: payload };

    default:
      return state;
  }
};
