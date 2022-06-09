import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
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
  const { addToCart, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  const { name, price, quantity, background_image, id } = item;

  const navigationHandler = () => navigate(`/shop/${id}`);

  return (
    <CheckoutCardContainer>
      <CardIdentity onClick={navigationHandler}>
        <CardImage image={background_image} />
        <CardTitle>{name}</CardTitle>
      </CardIdentity>

      <CardControls>
        <Price>$ {price}</Price>

        <AmountChanger>
          <ControlButton onClick={() => removeFromCart(item)}>
            &#134;
          </ControlButton>

          <ItemAmount>{quantity}</ItemAmount>

          <ControlButton onClick={() => addToCart(item)}>&#135;</ControlButton>
        </AmountChanger>

        <RemoveButton
          buttonStyle='normal'
          onClick={() => removeFromCart(item, true)}
        >
          remove
        </RemoveButton>
      </CardControls>
    </CheckoutCardContainer>
  );
}

export default CheckoutCard;
