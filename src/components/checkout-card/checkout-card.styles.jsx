import styled from "styled-components";
import Button from "../button/button";

export const CheckoutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 250px;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral60p};
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};

  @media screen and (min-width: 425px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 16px 32px;
  }
`;

export const CardIdentity = styled.div`
  width: 100%;
  border-radius: 6px;
  color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  border: 2px solid ${({ theme }) => theme?.colors && theme.colors.primary};
  background-color: ${({ theme }) => theme?.colors && theme.colors.primary};
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 425px) {
    max-width: 60%;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  padding-top: 66%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ image }) => image});
`;

export const CardTitle = styled.p`
  padding: 16px 8px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.neutral};
`;

export const CardControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;

export const AmountChanger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  gap: 24px;
`;

export const ControlButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 32px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;

export const RemoveButton = styled(Button)`
  font-size: 0.75rem;
`;

export const ItemAmount = styled.p`
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;
