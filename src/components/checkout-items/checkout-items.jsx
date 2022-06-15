import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import CheckoutCard from "../checkout-card/checkout-card";
import RenderIf from "../render-if/render-if";
import {
  CheckoutItemsContainer,
  Title,
  EmptyMessage,
} from "./checkout-items.styles";

function CheckoutItems() {
  const { cartItems } = useContext(CartContext);

  const CheckoutCards = cartItems.map((item) => (
    <CheckoutCard key={item.id} item={item} />
  ));

  return (
    <CheckoutItemsContainer>
      <RenderIf condition={cartItems.length}>
        <Title>my cart</Title>

        {CheckoutCards}
      </RenderIf>

      <RenderIf condition={!cartItems.length}>
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      </RenderIf>
    </CheckoutItemsContainer>
  );
}

export default CheckoutItems;
