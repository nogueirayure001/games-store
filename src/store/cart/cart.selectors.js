export function selectAll(state) {
  return state.cart;
}

export function selectCartShowing(state) {
  return state.cart.cartShowing;
}

export function selectCartItems(state) {
  return state.cart.cartItems;
}

export function selectPrice(state) {
  return state.cart.price;
}

export function selectDiscount(state) {
  return state.cart.discount;
}
