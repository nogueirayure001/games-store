import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearFromCart,
} from "../../store/cart/cart.actions";
import {
  CheckoutCardContainer,
  CardIdentity,
  CardImage,
  CardTitle,
  CardControls,
  Price,
  AmountChanger,
  ControlButton,
  RemoveButton,
  ItemAmount,
} from "./checkout-card.styles";

function CheckoutCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, price, quantity, background_image, id } = item;

  const navigationHandler = () => navigate(`/shop/${id}`);

  const decrementHandler = () => dispatch(removeFromCart(item));

  const incrementHandler = () => dispatch(addToCart(item));

  const clearCartItemHandler = () => dispatch(clearFromCart(item));

  return (
    <CheckoutCardContainer>
      <CardIdentity onClick={navigationHandler}>
        <CardImage image={background_image} />
        <CardTitle>{name}</CardTitle>
      </CardIdentity>

      <CardControls>
        <Price>$ {price}</Price>

        <AmountChanger>
          <ControlButton onClick={decrementHandler}>&#134;</ControlButton>

          <ItemAmount>{quantity}</ItemAmount>

          <ControlButton onClick={incrementHandler}>&#135;</ControlButton>
        </AmountChanger>

        <RemoveButton buttonStyle='normal' onClick={clearCartItemHandler}>
          remove
        </RemoveButton>
      </CardControls>
    </CheckoutCardContainer>
  );
}

export default CheckoutCard;
