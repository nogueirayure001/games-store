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

export const GameCardContainer = styled.div`
  flex: 1 1 250px;
  position: relative;
  max-width: 400px;
  color: #aaa;
  border-radius: 6px;
  background-color: #000;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${AddToCartButton} {
      display: block;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-top: 66%;
  background-image: url(${({ image }) => image});
  background-size: cover;

  &:hover {
    opacity: 0.8;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Price = styled(Name)``;
