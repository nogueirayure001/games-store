import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAll } from "../../store/cart/cart.selectors";
import Button from "../button/button";
import {
  CartContainer,
  Title,
  ItemsContainer,
  CartItem,
  Info,
  Quantity,
  Name,
} from "./cart.styles";

function Cart({ insideRef }) {
  const { cartShowing, cartItems } = useSelector(selectAll);

  const navigate = useNavigate();

  const ToCheckoutHandler = () => navigate("checkout");

  return (
    <CartContainer shouldDisplay={cartShowing} ref={insideRef}>
      <Title>My Cart</Title>

      <ItemsContainer>
        {cartItems?.map((item) => (
          <CartItem key={item.slug}>
            <img src={item.background_image} alt={item.name} />

            <Info>
              <Quantity>x {item.quantity}</Quantity>
              <Name>{item.name}</Name>
            </Info>
          </CartItem>
        ))}
      </ItemsContainer>

      <Button buttonStyle='normal' onClick={ToCheckoutHandler}>
        checkout
      </Button>
    </CartContainer>
  );
}

export default Cart;
