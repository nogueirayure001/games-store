import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid ${({ theme }) => theme?.colors && theme.colors.secondary};
  border-bottom-color: transparent;
  border-radius: 50%;
  background-color: transparent;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
