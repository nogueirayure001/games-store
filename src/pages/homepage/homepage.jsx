import Carrossel from "../../components/carrossel/carrossel";
import GamesSection from "../../components/games-section/games-section";
import CarrosselItem from "../../components/carrossel-item/carrossel-item";
import ItemsSplitter from "../../components/items-splitter/items-splitter";
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
        configs={CARROSSEL_CONFIGS}
        title='The best action games on sale!'
      >
        {actionGamesOnSale.map((game) => (
          <CarrosselItem
            key={game.slug}
            item={game}
            heightRatio={CARROSSEL_CONFIGS.heightRatio}
          />
        ))}
      </Carrossel>

      <GamesSection title='RPG Games' games={RPGGames} />

      <Carrossel title='Action Games'>
        <ItemsSplitter itemsToSplit={actionGamesOnSale} splitValue={3} />
      </Carrossel>
    </div>
  );
}

export default Homepage;
