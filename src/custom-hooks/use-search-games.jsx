import { useEffect, useState } from "react";

export function useSearchGames(queryParams) {
  const [games, setGames] = useState(null);

  const BASE_URL = "https://api.rawg.io/api/games";
  let url = `${BASE_URL}?key=${process.env.REACT_APP_KEY}&search_precise=true`;

  for (const [key, value] of Object.entries(queryParams)) {
    if (value instanceof Array && value.length) {
      url += `&${key}=${value.join(",")}`;
    } else if (!(value instanceof Array) && value) {
      url += `&${key}=${value}`;
    }
  }

  const { search: searchTerm } = queryParams;

  useEffect(() => {
    setGames(null);

    const getGamesMatched = async () => {
      const response = await fetch(url);
      const gamesData = await response.json();

      setGames(gamesData);
    };

    getGamesMatched();
  }, [searchTerm, url]);

  return games;
}
