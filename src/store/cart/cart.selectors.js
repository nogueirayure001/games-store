import { createSelector } from "reselect";

export function selectCartItems(state) {
  return state.cart.cartItems;
}

export const selectPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
);

export const selectDiscount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (sum, { price, quantity, discount = 20 }) =>
      sum + (price * quantity * discount) / 100,
    0
  )
);

export function selectCartShowing(state) {
  return state.cart.cartShowing;
}

export const selectAll = createSelector(
  [selectCartItems, selectCartShowing, selectPrice, selectDiscount],
  (cartItems, cartShowing, price, discount) => ({
    cartItems,
    cartShowing,
    price,
    discount,
  })
);

// export function selectAll(state) {
//   const { cartItems, cartShowing } = state.cart;

//   return {
//     cartItems,
//     cartShowing,
//     price: selectPrice(cartItems),
//     discount: selectDiscount(cartItems),
//   };
// }
