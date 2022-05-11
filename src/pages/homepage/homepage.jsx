import Carrossel from "../../components/carrossel/carrossel";
import GamesSection from "../../components/games-section/games-section";
import { actionGamesOnSale, RPGGames } from "../../games";

import "./homepage.scss";

const CARROSSEL_DEFAULT_CONFIGS = {
  width: "100%",
  maxWidth: "800px",
  heightRatio: "66%",
};

const CARROSSEL_MULTI_ITEM_CONFIGS = {
  width: "100%",
  heightRatio: "66%",
};

function Homepage() {
  return (
    <div className='homepage-container'>
      <Carrossel
        games={actionGamesOnSale}
        title='The best action games on sale!'
        configs={CARROSSEL_DEFAULT_CONFIGS}
        carrosselType='multiFrame'
      />

      <GamesSection title='RPG Games' games={RPGGames} limit={4} />

      <Carrossel
        games={actionGamesOnSale}
        title='The best action games on sale!'
        configs={CARROSSEL_DEFAULT_CONFIGS}
      />

      <Carrossel
        games={actionGamesOnSale}
        title='Action Games'
        configs={CARROSSEL_MULTI_ITEM_CONFIGS}
        carrosselType='multiItem'
        splitValue={3}
      />
    </div>
  );
}

export default Homepage;
