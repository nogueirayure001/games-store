import styled from "styled-components";

export const GamesSectionContainer = styled.section`
  width: 100%;
  margin-top: 3rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: "Koulen", cursive;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.5rem;
  letter-spacing: 1.5px;
  color: #ff5733;

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

export const GameCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
