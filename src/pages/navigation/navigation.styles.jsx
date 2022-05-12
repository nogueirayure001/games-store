import styled, { css } from "styled-components";
import { ReactComponent as SiteLogo } from "../../assets/logo-dark.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";

export const SiteHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px;
  background-color: #000;
  transition: height 400ms ease;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    width: 22.5rem;
  }
`;

export const Title = styled.h1`
  width: 0;
  margin-left: 0;
  font-family: "Koulen", cursive;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: #ff5733;
  animation-name: show-word;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;
  overflow: hidden;

  @keyframes show-word {
    100% {
      width: 12.5rem;
      margin-left: 8px;
    }
  }
`;

export const Logo = styled(SiteLogo)`
  width: 80px;
  height: 80px;
  color: #feaa00;
  transform: scale(4);
  animation-name: logo-fall;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  @keyframes logo-fall {
    from {
      animation-timing-function: cubic-bezier(0.7, 0.22, 0.725, 0.61);
    }
    13.33% {
      animation-timing-function: cubic-bezier(0.16, 0.1875, 0.24, 0.094);
    }
    23.66% {
      animation-timing-function: cubic-bezier(0.234, 0.15, 0.88, 0.85);
    }
    65% {
      animation-timing-function: linear;
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const MenuTogglerIcon = styled(ArrowIcon)`
  width: 16px;
  color: #ff5733;
  transition: transform 400ms ease;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: rotate(-540deg);
    `}
`;

export const MenuToggler = styled.button`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 3.2px 0;
  background-color: #151515;
  z-index: 9999;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
`;
