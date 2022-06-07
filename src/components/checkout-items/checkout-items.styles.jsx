import styled from "styled-components";

export const CheckoutItemsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  width: 100%;

  @media screen and (min-width: 425px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1024px) {
    align-self: stretch;
  }
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;

export const EmptyMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 24px;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;
