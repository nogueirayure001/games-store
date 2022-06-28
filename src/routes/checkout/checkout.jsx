import React from "react";
import Summary from "../../components/summary/summary";
import { CheckoutContainer, PageTitle, Content } from "./checkout.styles";
import CheckoutItems from "../../components/checkout-items/checkout-items";

function Checkout() {
  return (
    <CheckoutContainer>
      <PageTitle>checkout</PageTitle>

      <Content>
        <Summary />

        <CheckoutItems />
      </Content>
    </CheckoutContainer>
  );
}

export default Checkout;
