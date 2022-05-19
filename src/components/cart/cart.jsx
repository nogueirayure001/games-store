import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
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
  const { cartShowing, cartItems } = useContext(CartContext);

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

      <Button buttonStyle='normal'>checkout</Button>
    </CartContainer>
  );
}

export default Cart;
