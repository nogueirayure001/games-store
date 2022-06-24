import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import {
  SummaryContainer,
  Title,
  InfoBit,
  Label,
  Value,
} from "./summary.styles";

function Summary() {
  const { price, discount } = useContext(CartContext);
  const total = price - discount;

  return (
    <SummaryContainer>
      <Title>summary</Title>

      <InfoBit>
        <Label>Price</Label>
        <Value>$ {price.toFixed(2)}</Value>
      </InfoBit>

      <InfoBit>
        <Label>Discount</Label>
        <Value>- $ {discount.toFixed(2)}</Value>
      </InfoBit>

      <InfoBit>
        <Label>Total</Label>
        <Value>$ {total.toFixed(2)}</Value>
      </InfoBit>

      <Button buttonStyle='normal'>continue</Button>
    </SummaryContainer>
  );
}

export default Summary;
