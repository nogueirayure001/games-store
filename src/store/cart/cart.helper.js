export const addItemToCart = (cartItems, itemToAdd) => {
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

export const removeItemFromCart = (cartItems, itemToRemove) => {
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

export const clearItemFromCart = (cartItems, itemToClear) => {
  const newCartItems = [...cartItems];

  const index = cartItems.findIndex((item) => item.name === itemToClear.name);

  if (index === -1) return;

  newCartItems.splice(index, 1);

  return newCartItems;
};

function CalcSaleValues(cartItems) {
  const price = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const discount = Number(
    cartItems
      .reduce(
        (sum, { price, quantity, discount = 20 }) =>
          sum + (price * quantity * discount) / 100,
        0
      )
      .toFixed(2)
  );

  return { price, discount };
}

export function getUpdateCartPayload(store, targetItem, callback) {
  const { cartItems } = store.getState().cart;

  const newCartItems = callback(cartItems, targetItem);

  const { price, discount } = CalcSaleValues(newCartItems);

  return {
    cartItems: newCartItems,
    price,
    discount,
  };
}
