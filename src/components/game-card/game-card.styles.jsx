import styled from "styled-components";
import { ReactComponent as CartPlusIcon } from "../../assets/cart-plus.svg";
import Button from "../button/button";

const AddToCartIcon = styled(CartPlusIcon)`
  width: 24px;
  color: #aaa;
  transition: color 400ms ease;

  &:hover {
    color: #ff5733;
  }
`;

const CartButton = (props) => (
  <Button {...props}>
    <AddToCartIcon />
  </Button>
);

export const AddToCartButton = styled(CartButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  display: none;
  z-index: 999;
`;

export const Image = styled.div`
  width: 100%;
  padding-top: 66%;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const GameCardContainer = styled.div`
  justify-self: center;
  flex: 1 1 250px;
  position: relative;
  max-width: 500px;
  width: 100%;
  color: #aaa;
  border-radius: 6px;
  background-color: #000;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 12px 3px #000;

  &:hover {
    ${AddToCartButton} {
      display: block;
    }

    ${Image} {
      opacity: 0.8;
    }
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  text-align: center;
`;

export const Name = styled.p`
  color: #ff5733;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Price = styled(Name)`
  color: #aaa;
`;
