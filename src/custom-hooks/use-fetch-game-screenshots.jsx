import { useEffect, useState } from "react";

export function useFetchGameScreenshots(id, ssLimit = 10) {
  const [screenshots, setScreenshots] = useState(null);

  const BASE_URL = `https://api.rawg.io/api/games/${id}/screenshots?page_size=${ssLimit}`;

  const url = `${BASE_URL}&key=${process.env.REACT_APP_KEY}`;
  console.log(url);

  useEffect(() => {
    const getScreenshots = async () => {
      const response = await fetch(url);
      const gameScreenshots = await response.json();

      setScreenshots(gameScreenshots.results);
    };

    getScreenshots();
  }, [id, url]);

  console.log(screenshots);

  return screenshots;
}
