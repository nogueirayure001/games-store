import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCarrossel from "../game-carrossel/game-carrossel";
import "./game-page.scss";

function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  const BASE_URL = " http://localhost:3000/shop";

  useEffect(() => {
    const getGameData = async () => {
      const response = await fetch(`${BASE_URL}/${id}`);
      const gameData = await response.json();

      setGame(gameData);
    };

    getGameData();
  }, [id]);

  return game ? (
    <section className='game-page-container'>
      <h2 className='title'>{game.name}</h2>

      <GameCarrossel
        game={game}
        configs={{
          width: "100%",
          maxWidth: "800px",
          heightRatio: "66%",
        }}
      />
    </section>
  ) : (
    <div>
      <h1>carregando...</h1>
    </div>
  );
}

export default GamePage;
