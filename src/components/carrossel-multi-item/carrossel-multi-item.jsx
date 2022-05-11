import GameCard from "../game-card/game-card";
import { CarrosselMultiItemContainer } from "./carrossel-multi-item.styles";

function CarrosselMultiItem({ games, columns }) {
  return (
    <CarrosselMultiItemContainer columns={columns}>
      {games.map((game) => (
        <GameCard key={game.name} game={game} />
      ))}
    </CarrosselMultiItemContainer>
  );
}

export default CarrosselMultiItem;
