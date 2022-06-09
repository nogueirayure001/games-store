import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export const GameSearchContainer = styled.form`
  position: relative;
  display: flex;
  width: 200px;
  margin-top: 24px;
  border-radius: 999px;
  overflow: hidden;
  transition: width 400ms ease;
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme?.colors && theme.colors.primary};
    width: 100%;
  }

  @media screen and (min-width: 425px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    transition: width 700ms ease;
    width: 500px;
    max-width: 700px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;

export const SearchInput = styled.input.attrs({ type: "search" })`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  flex: 1 1 auto;
  width: 100%;
  padding: 16px 48px;
  text-align: center;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  letter-spacing: 1.2px;
  border: none;
  border-radius: 999px 0 0 999px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  outline: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;

const ButtonIcon = styled(SearchIcon)`
  width: 20px;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;

const SubmitButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-family: inherit;
`;

const SubmitButtonStyled = (props) => (
  <SubmitButton {...props}>
    <ButtonIcon />
  </SubmitButton>
);

export const SearchButton = styled(SubmitButtonStyled)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
  transition: opacity 400ms ease;

  &:hover {
    opacity: 1;
  }
`;
