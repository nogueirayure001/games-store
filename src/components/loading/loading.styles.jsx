import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral2};
  z-index: 9999;
`;

export const Title = styled.h2`
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;

export const LoadingBar = styled.div`
  position: relative;
  width: 160px;
  height: 22px;
  border: 4px solid ${({ theme }) => theme?.colors && theme.colors.neutral};
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};

  @media screen and (min-width: 768px) {
    width: 320px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    background-color: ${({ theme }) => theme?.colors && theme.colors.primary};
    animation-name: loading;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: -2s;
  }

  @keyframes loading {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }
`;
