import { useEffect, useState } from "react";

export function useFetchGame(id) {
  const [game, setGame] = useState(null);

  const BASE_URL = "https://api.rawg.io/api/games";

  const url = `${BASE_URL}/${id}?key=${process.env.REACT_APP_KEY}`;

  useEffect(() => {
    const getGameData = async () => {
      const response = await fetch(url);
      const gameData = await response.json();

      setGame(gameData);
    };

    getGameData();
  }, [id, url]);

  return game;
}
