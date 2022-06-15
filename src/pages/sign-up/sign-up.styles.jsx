import styled from "styled-components";

export const SignUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;

  @media screen and (min-width: 1024px) {
    padding: 48px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  text-align: center;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme?.fonts && theme.fonts.primary};
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
