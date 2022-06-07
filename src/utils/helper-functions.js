export function CalcSaleValues(cartItems) {
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

  const total = price - discount;

  return { price, discount, total };
}
