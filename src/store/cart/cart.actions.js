import { store } from "../store";
import { createAction } from "../../utils/helper-functions";
import { CART_ACTIONS } from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getUpdateCartPayload,
} from "./cart.helper";

export const toggleCartShowing = () => {
  const { cartShowing } = store.getState().cart;

  return createAction(CART_ACTIONS.TOGGLE_CART_VISIBILITY, !cartShowing);
};

export const addToCart = (itemToAdd) => {
  const payload = getUpdateCartPayload(store, itemToAdd, addItemToCart);

  return createAction(CART_ACTIONS.UPDATE_CART, payload);
};

export const removeFromCart = (itemToRemove) => {
  const payload = getUpdateCartPayload(store, itemToRemove, removeItemFromCart);

  return createAction(CART_ACTIONS.UPDATE_CART, payload);
};

export const clearFromCart = (itemToClear) => {
  const payload = getUpdateCartPayload(store, itemToClear, clearItemFromCart);

  return createAction(CART_ACTIONS.UPDATE_CART, payload);
};
