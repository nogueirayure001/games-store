import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 480px;
  padding: 32px 24px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};
`;

export const InputFields = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }

  & > *:last-child {
    margin-bottom: 24px;
  }
`;

export const ErrorCode = styled.p`
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme?.colors && theme.colors.secondaryError};
`;
