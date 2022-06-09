import styled, { css } from "styled-components";

export const FormInputContainer = styled.div`
  position: relative;
  width: 100%;

  &:not(:first-child) {
    margin-top: 24px;
  }

  label {
    position: absolute;
    top: 50%;
    left: 12px;
    padding: 0 6px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme?.colors && theme.colors.primary};
    transition: all 400ms ease;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme?.colors && theme.colors.primary};
    border-radius: 3px;
    background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
    font-family: inherit;
    font-size: 1rem;
    color: ${({ theme }) => theme?.colors && theme.colors.secondary};

    &:focus {
      outline: 2px solid ${({ theme }) => theme?.colors && theme.colors.primary};
    }

    &:focus + label {
      top: -12px;
      left: 2px;
      font-size: 0.75rem;
    }

    &[type="password"] {
      letter-spacing: 2px;
    }

    ${({ shrink }) =>
      shrink &&
      css`
        & + label {
          top: -12px;
          left: 2px;
          font-size: 0.75rem;
        }
      `}
  }
`;
