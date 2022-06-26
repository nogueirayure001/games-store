import { DEFAULT_REGEXP } from "./regexp";

export function checkMatchedInputs(matchingPairs, fields) {
  const inputsMatch = matchingPairs.every(
    ({ input }) => fields[input[0]] === fields[input[1]]
  );

  const unmatchedFields = matchingPairs
    .filter(({ input }) => !(fields[input[0]] === fields[input[1]]))
    .map(({ fieldsLabel }) => fieldsLabel);

  return { inputsMatch, unmatchedFields };
}

export function checkInputsValidity(form) {
  let inputsAreValid = true;

  for (const elem of form) {
    const { tagName, value, type } = elem;

    if (tagName === "INPUT" && !value.match(DEFAULT_REGEXP[type])) {
      inputsAreValid = false;
    }
  }

  return inputsAreValid;
}

export function createAction(type, payload) {
  return { type, payload };
}

// excluir
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

  return { price, discount };
}
