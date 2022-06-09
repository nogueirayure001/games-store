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
