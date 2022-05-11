import GameCard from "../game-card/game-card";

import {
  GamesSectionContainer,
  SectionTitle,
  GameCardsContainer,
} from "./game-section.styles";

function GamesSection({ title, games }) {
  return (
    <GamesSectionContainer>
      <SectionTitle>{title}</SectionTitle>

      <GameCardsContainer>
        {games?.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </GameCardsContainer>
    </GamesSectionContainer>
  );
}

export default GamesSection;
