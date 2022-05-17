import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../../assets/user-icon.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

export const NavContainer = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: ${({ isMenuOpen, navBoxHeight = 144 }) =>
    isMenuOpen ? `${navBoxHeight}px` : 0};
  transition: height 400ms ease;
  overflow: hidden;

  @media screen and (max-width: 358.99px) {
    height: ${({ isMenuOpen, navBoxHeight = 201 }) =>
      isMenuOpen ? `${navBoxHeight}px` : 0};
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
  }
`;

export const NavBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  gap: 32px 8px;

  @media screen and (min-width: 1024px) {
    padding: 0;
    gap: 16px;
  }
`;

export const MiddleNavBar = styled(NavBar)`
  padding-top: 48px;

  @media screen and (min-width: 1024px) {
    padding-top: 0;
    margin-right: 32px;
  }
`;

export const RightNavBar = styled(NavBar)`
  gap: 32px;
`;

export const NavItem = styled.li`
  position: relative;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  padding: 8px 16px;
  position: relative;
  font-weight: 700;

  &:hover {
    opacity: 0.9;

    &::before,
    &::after {
      content: " ";
      position: absolute;
      width: 0%;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: -500ms;
    }

    &::before {
      top: 0;
      animation-name: circle-top;
      border-top: 1px solid
        ${({ theme }) => theme?.colors && theme.colors.primary};
      border-right: 1px solid
        ${({ theme }) => theme?.colors && theme.colors.primary};

      @keyframes circle-top {
        0% {
          width: 0%;
          height: 0;
          right: auto;
          left: 0;
        }

        59.99% {
          width: 100%;
          height: 0;
          right: auto;
          left: 0;
        }

        60% {
          right: 0;
          left: auto;
        }

        99.99% {
          right: 0;
          left: auto;
        }

        100% {
          height: 100%;
        }
      }
    }

    &::after {
      bottom: 0;
      animation-name: circle-down;
      border-left: 1px solid
        ${({ theme }) => theme?.colors && theme.colors.primary};
      border-bottom: 1px solid
        ${({ theme }) => theme?.colors && theme.colors.primary};

      @keyframes circle-down {
        0% {
          width: 0%;
          height: 0;
          right: 0;
          left: auto;
        }

        59.99% {
          width: 100%;
          height: 0;
          right: 0;
          left: auto;
        }

        60% {
          right: auto;
          left: 0;
        }

        99.99% {
          right: auto;
          left: 0;
        }

        100% {
          height: 100%;
        }
      }
    }
  }
`;

export const ColorModeToggler = styled.input.attrs({
  type: "checkbox",
})`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: 52px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme?.colors && theme.colors.primary};

  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(39, 109, 135, 1) 0%,
    rgba(56, 176, 222, 1) 35%
  );
  cursor: pointer;

  &::after {
    position: absolute;
    top: 2px;
    right: 2px;
    display: block;
    content: " ";
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background-color: ${({ theme }) =>
      theme?.colors && theme.colors.secondary3};
    transition: all 400ms ease;
  }

  &:checked {
    border: 2px solid ${({ theme }) => theme?.colors && theme.colors.primary};
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(34, 34, 34, 1) 35%
    );

    &::after {
      background-color: ${({ theme }) =>
        theme?.colors && theme.colors.secondary};
      right: 30px;
    }
  }
`;

export const UserIcon = styled(AccountIcon)`
  width: 30px;
  transition: color 400ms ease;

  &:hover {
    color: ${({ theme }) => theme?.colors && theme.colors.primary};
  }

  @media screen and (min-width: 1024px) {
    width: 24px;
  }
`;

export const CartIcon = styled(ShoppingIcon)`
  width: 30px;
  transition: color 400ms ease;

  &:hover {
    color: ${({ theme }) => theme?.colors && theme.colors.primary};
  }

  @media screen and (min-width: 1024px) {
    width: 24px;
  }
`;
