import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";
import CheckoutCard from "../checkout-card/checkout-card";
import RenderIf from "../render-if/render-if";
import {
  CheckoutItemsContainer,
  Title,
  EmptyMessage,
} from "./checkout-items.styles";

function CheckoutItems() {
  const cartItems = useSelector(selectCartItems);

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
