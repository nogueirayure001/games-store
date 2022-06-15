import styled from "styled-components";

export const Form = styled.form`
  padding-top: 16px;
`;

export const InputFields = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }

  & > *:last-child {
    margin-bottom: 24px;
  }
`;

export const AlternativeAuth = styled.p`
  line-height: 24px;
  text-align: center;
`;

export const ErrorCode = styled.p`
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme?.colors && theme.colors.secondaryError};
`;
