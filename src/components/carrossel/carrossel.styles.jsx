import styled from "styled-components";

export const CarrosselContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Koulen", cursive;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #aaa;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
