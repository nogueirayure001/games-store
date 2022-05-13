import styled from "styled-components";
import { ReactComponent as CartPlusIcon } from "../../assets/cart-plus.svg";
import Button from "../button/button";

const AddToCartIcon = styled(CartPlusIcon)`
  width: 24px;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  transition: color 400ms ease;

  &:hover {
    color: ${({ theme }) => theme?.colors && theme.colors.primary};
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
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  border-radius: 6px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};

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
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Price = styled(Name)`
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;
