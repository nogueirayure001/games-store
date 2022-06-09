import styled from "styled-components";

export const AuthBoxContainer = styled.section`
  display: ${({ shouldDisplay }) => (shouldDisplay ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: calc(100% + 40px);
  right: 50%;
  transform: translateX(50%);
  width: 280px;
  padding: 16px;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  border-radius: 6px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};
  z-index: 9999;

  @media screen and (min-width: 1024px) {
    right: 30px;
    top: calc(100% + 16px);
    transform: none;
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;

export const SignUpMessage = styled.p`
  margin-top: 16px;
  line-height: 24px;
  text-align: center;
`;
