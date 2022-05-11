import GameCard from "../game-card/game-card";

import {
  GamesSectionContainer,
  SectionTitle,
  GameCardsContainer,
} from "./game-section.styles";

function GamesSection({ title, games, limit }) {
  if (!limit) limit = games?.length;

  return (
    <GamesSectionContainer>
      <SectionTitle>{title}</SectionTitle>

      <GameCardsContainer>
        {games
          ?.filter((_, index) => index < limit)
          .map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
      </GameCardsContainer>
    </GamesSectionContainer>
  );
}

export default GamesSection;
