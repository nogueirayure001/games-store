import styled from "styled-components";

export const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 250px;
  padding: 16px;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
  border-radius: 6px;
  background-color: ${({ theme }) => theme?.colors && theme.colors.neutral};
  box-shadow: 0 0 12px 3px
    ${({ theme }) => theme?.colors && theme.colors.neutral3};

  @media screen and (min-width: 425px) {
    max-width: 600px;
    padding: 16px 32px;
  }

  @media screen and (min-width: 1024px) {
    position: sticky;
    top: 100px;
    max-width: 400px;
    margin-top: 60px;
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Label = styled.span`
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Value = styled.span``;

export const InfoBit = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-of-type ${Label} {
    font-size: 1.2rem;
  }

  &:last-of-type ${Value} {
    font-size: 1.2rem;
  }
`;
