import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../../assets/user-icon.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

export const NavContainer = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: ${({ menuOpen, navBoxHeight = 144 }) =>
    menuOpen ? `${navBoxHeight}px` : 0};
  transition: height 400ms ease;
  overflow: hidden;

  @media screen and (max-width: 358.99px) {
    height: ${({ menuOpen, navBoxHeight = 201 }) =>
      menuOpen ? `${navBoxHeight}px` : 0};
  }

  @media screen and (min-width: 1000px) {
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

  @media screen and (min-width: 1000px) {
    padding: 0;
  }
`;

export const MiddleNavBar = styled(NavBar)`
  padding-top: 48px;

  @media screen and (min-width: 1000px) {
    padding-top: 0;
    margin-right: 120px;
  }
`;

export const RightNavBar = styled(NavBar)`
  gap: 64px;

  @media screen and (min-width: 1000px) {
    gap: 32px;
  }
`;

export const NavItem = styled.li`
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  position: relative;
  padding: 8px 16px;

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
      border-top: 1px solid #ff5733;
      border-right: 1px solid #ff5733;

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
      border-left: 1px solid #ff5733;
      border-bottom: 1px solid #ff5733;

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

export const UserIcon = styled(AccountIcon)`
  width: 30px;
  transition: color 400ms ease;

  &:hover {
    color: #ff5733;
  }

  @media screen and (min-width: 1000px) {
    width: 24px;
  }
`;

export const CartIcon = styled(ShoppingIcon)`
  width: 30px;
  transition: color 400ms ease;

  &:hover {
    color: #ff5733;
  }

  @media screen and (min-width: 1000px) {
    width: 24px;
  }
`;
