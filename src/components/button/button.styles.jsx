import styled, { css } from "styled-components";

const normal = css`
  width: 100%;
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

const normalDarker = css`
  width: 100%;
  padding: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  border-radius: 3px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  transition: background-color 400ms ease;

  &:hover {
    background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
    color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  }
`;

const normalDarkerInverted = css`
  width: 100%;
  padding: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  border-radius: 3px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  transition: background-color 400ms ease;

  &:hover {
    color: ${({ theme }) => theme?.colors && theme.colors.neutral};
    background-color: ${({ theme }) => theme?.colors && theme.colors.primary};
  }
`;

const googleColors = css`
  width: 100%;
  padding: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 3px;
  background-color: #4285f4;
  transition: opacity 400ms ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const CustomButtom = styled.button`
  ${({ position }) => position && `position: ${position};`}
  ${({ keepHeight }) => keepHeight && `height: 47px;`}
  text-transform: uppercase;
  ${({ customStyle }) => customStyle === "normal" && normal}
  ${({ customStyle }) => customStyle === "normalDarker" && normalDarker}
  ${({ customStyle }) =>
    customStyle === "normalDarkerInverted" && normalDarkerInverted}
  ${({ customStyle }) => customStyle === "googleColors" && googleColors}
`;
