import styled from "styled-components";

export const CarrosselMultiItemContainer = styled.div`
  flex: 1 0 100%;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 16px;
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  scroll-snap-align: center;
  box-shadow: none;

  & > * {
    margin: 16px;
  }
`;
