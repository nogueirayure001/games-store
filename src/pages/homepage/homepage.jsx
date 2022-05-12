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

const CARROSSEL_MULTI_FRAME_CONFIGS = {
  width: "100%",
  maxWidth: "800px",
  heightRatio: "66%",
  sideSlidesOffset: "10%",
  sideSlidesPercentHeight: "90%",
};

function Homepage() {
  return (
    <div className='homepage-container'>
      <Carrossel
        games={actionGamesOnSale}
        title='The best action games on sale!'
        configs={CARROSSEL_DEFAULT_CONFIGS}
        setBreadcrumbs
        breadcrumbsConfigs={{
          isOnHorizontal: false,
        }}
      />

      <Carrossel
        games={actionGamesOnSale}
        title='The best action games on sale!'
        configs={CARROSSEL_MULTI_FRAME_CONFIGS}
        carrosselType='multiFrame'
        setBreadcrumbs
        breadcrumbsConfigs={{
          isOnHorizontal: true,
          crumbMaxWidth: "800px",
        }}
      />

      <GamesSection title='RPG Games' games={RPGGames} limit={4} />

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
