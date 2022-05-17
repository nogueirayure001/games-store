import styled, { css } from "styled-components";

const normal = css`
  padding: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  border-radius: 3px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.primary};
  transition: background-color 400ms ease;

  &:hover {
    background-color: ${({ theme }) => theme?.colors && theme.colors.neutral2};
    color: ${({ theme }) => theme?.colors && theme.colors.primary};
  }
`;

export const CustomButtom = styled.button`
  text-transform: uppercase;
  ${({ customStyle }) => customStyle === "normal" && normal}
`;
