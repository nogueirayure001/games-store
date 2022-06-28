import styled, { css } from "styled-components";
import Button from "../../../components/button/button";

export const SearchPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Message = styled.h2`
  margin-top: 32px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors && theme?.colors.primary};
`;

export const PageChangers = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 320px;
  margin-top: 32px;
`;

const BaseButton = ({ value, ...otherProps }) => (
  <Button value={value} {...otherProps} buttonStyle='normalDarkerInverted'>
    {value}
  </Button>
);

export const PreviousButton = styled(BaseButton)`
  ${({ inactive }) =>
    inactive &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const NextButton = styled(PreviousButton)``;

export const SearchFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 200px;
  margin-top: 20px;

  @media screen and (min-width: 425px) {
    max-width: 300px;
  }

  @media screen and (min-width: 728px) {
    flex-direction: row;
    max-width: 500px;
  }
`;
