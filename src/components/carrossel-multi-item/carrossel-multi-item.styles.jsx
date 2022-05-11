import styled from "styled-components";

export const CarrosselMultiItemContainer = styled.div`
  flex: 1 0 100%;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 1rem;
  width: 100%;
  scroll-snap-align: center;
`;
