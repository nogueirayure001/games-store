import styled from "styled-components";

export const GamePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 64px 24px;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const MainPageContent = styled.section`
  width: 100%;
  margin-bottom: 32px;
  max-width: 600px;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const GamePrice = styled.p`
  margin-bottom: 16px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;

export const ButtonsContainer = styled.div`
  margin-bottom: 32px;

  & > *:first-child {
    margin-bottom: 16px;
  }
`;

export const GameInfoList = styled.ul`
  margin-bottom: 32px;
`;

export const GameInfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;

  &:not(:last-child) {
    border-bottom: 2px solid
      ${({ theme }) => theme?.colors && theme.colors.neutral3};
  }
`;

export const InfoItemCategory = styled.span`
  text-transform: capitalize;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;

export const InfoItemValue = styled.span`
  text-align: right;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;

export const AboutGame = styled.div`
  padding: 0 16px;
`;

export const AboutGameTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors && theme.colors.primary};
`;

export const AboutGameParagraph = styled.p`
  text-align: justify;
  color: ${({ theme }) => theme?.colors && theme.colors.secondary};
`;
