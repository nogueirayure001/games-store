import styled from "styled-components";

export const Select = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const SelectOptionsContainer = styled.div`
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${({ isHidden }) => (isHidden ? "0" : "auto")};
  max-height: 400px;
  overflow: auto;
  z-index: ${({ isHidden }) => (isHidden ? "-1" : "999")};
  background-color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;

export const OptionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  z-index: 100;

  input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
    cursor: pointer;
    z-index: 101;

    &:hover {
      background-color: ${({ theme }) =>
        theme?.colors && theme.colors.neutral60p};
    }

    &:checked {
      background-color: ${({ theme }) =>
        theme?.colors && theme.colors.neutral60p};
    }
  }

  label {
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme?.colors && theme.colors.primary};
    cursor: pointer;
    z-index: 102;
  }
`;
