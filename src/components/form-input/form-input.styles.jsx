import styled, { css } from "styled-components";

export const FormInputContainer = styled.div`
  width: 100%;
`;

export const InputAndLabelContainer = styled.div`
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

export const ErrorCode = styled.p`
  padding: 0.25rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme?.colors && theme.colors.secondaryError};
`;

export const InputGuideList = styled.ul`
  width: 170px;
  padding: 0.25rem;
  margin: 0 auto;
  list-style: disc inside;
`;

export const GuideListItem = styled.li`
  padding: 0.5rem 0.25rem 0.25rem;
  font-size: 0.9rem;

  color: ${({ theme, match }) =>
    match && theme?.colors
      ? theme.colors.secondaryValid
      : theme.colors.secondaryError};
`;
