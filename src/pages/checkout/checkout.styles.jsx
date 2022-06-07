import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: 100%;
  padding: 48px 24px;

  @media screen and (min-width: 1024px) {
    padding: 48px;
  }
`;

export const PageTitle = styled.section`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme?.fonts && theme.fonts.primary};
  color: ${({ theme }) => theme?.colors && theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;
