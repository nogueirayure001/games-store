import { useEffect, useState } from "react";

export function useFetchGame(id) {
  const BASE_URL = " http://localhost:3000/shop";

  const [game, setGame] = useState(null);

  useEffect(() => {
    const getGameData = async () => {
      const response = await fetch(`${BASE_URL}/${id}`);
      const gameData = await response.json();

      setGame(gameData);
    };

    getGameData();
  }, [id]);

  return game;
}
