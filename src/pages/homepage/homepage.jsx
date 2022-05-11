import Carrossel from "../../components/carrossel/carrossel";
import GamesSection from "../../components/games-section/games-section";
import { actionGamesOnSale, RPGGames } from "../../games";

import "./homepage.scss";

const CARROSSEL_CONFIGS = {
  width: "100%",
  maxWidth: "800px",
  heightRatio: "66%",
};

function Homepage() {
  return (
    <div className='homepage-container'>
      <Carrossel
        games={actionGamesOnSale}
        title='The best action games on sale!'
        configs={CARROSSEL_CONFIGS}
      />

      <GamesSection title='RPG Games' games={RPGGames} />

      <Carrossel
        games={actionGamesOnSale}
        title='Action Games'
        carrosselType='multi'
      />
    </div>
  );
}

export default Homepage;
