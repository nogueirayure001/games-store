import styled, { css } from "styled-components";

export const BreadcrumbsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${({ crumbWidth }) => (crumbWidth ? crumbWidth : "120px")};
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 12px 3px;

  ${({ isOnHorizontal, crumbMaxWidth, crumbHeight }) => {
    return (
      isOnHorizontal &&
      css`
        flex-direction: row;
        width: 100%;
        max-width: ${crumbMaxWidth ? crumbMaxWidth : "auto"};
        height: ${crumbHeight ? crumbHeight : "60px"};
      `
    );
  }};
`;

export const Breadcrumb = styled.li`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: url(${({ image }) => image && image});
  background-size: cover;
  background-position: center;
  transition: transform 400ms ease;

  &:hover {
    transform-origin: center;
    transform: scale(0.9);
  }

  ${({ active }) => {
    return (
      active &&
      css`
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #aaa;
          opacity: 0.5;
        }
      `
    );
  }}
`;
