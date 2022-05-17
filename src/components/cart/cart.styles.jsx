import styled from "styled-components";

export const CartContainer = styled.section`
  display: ${({ shouldDisplay }) => (shouldDisplay ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 110%;
  right: 50%;
  transform: translateX(50%);
  width: 280px;
  height: 320px;
  padding: 16px;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
  border-radius: 6px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};
  z-index: 9999;

  @media screen and (min-width: 1024px) {
    right: 30px;
    transform: none;
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral2};
  overflow: auto;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  font-size: 0.85rem;

  img {
    width: 60px;
    height: 40px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const Quantity = styled.p`
  margin-right: 16px;
  white-space: nowrap;
`;

export const Name = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
