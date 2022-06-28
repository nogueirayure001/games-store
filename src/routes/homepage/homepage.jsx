import React, { useContext } from "react";
import { ScreenTypeContext, screens } from "../../contexts/screen-type-context";
import Carrossel from "../../components/carrossel/carrossel";
import GamesSection from "../../components/games-section/games-section";
import RenderIf from "../../components/render-if/render-if";
import { actionGamesOnSale, RPGGames } from "../../games";

import "./homepage.scss";

const CARROSSEL_DEFAULT_CONFIGS = {
  width: "100%",
  maxWidth: "900px",
  heightRatio: "66%",
};

const CARROSSEL_MULTI_ITEM_CONFIGS = {
  width: "100%",
  heightRatio: "66%",
};

const CARROSSEL_MULTI_FRAME_CONFIGS = {
  width: "85%",
  maxWidth: "1000px",
  heightRatio: "66%",
  sideSlidesOffset: "4%",
  sideSlidesPercentHeight: "80%",
};

function Homepage() {
  const { screenType } = useContext(ScreenTypeContext);

  return (
    <div className='homepage-container'>
      <RenderIf
        condition={
          screenType === screens.phone || screenType === screens.tablet
        }
      >
        <Carrossel
          games={actionGamesOnSale}
          title='The best action games on sale!'
          configs={CARROSSEL_DEFAULT_CONFIGS}
          setBreadcrumbs
          breadcrumbsConfigs={{
            isOnHorizontal: true,
            crumbMaxWidth: "800px",
          }}
        />
      </RenderIf>

      <RenderIf condition={screenType === screens.desktop}>
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
      </RenderIf>

      <RenderIf condition={screenType === screens.phone}>
        <Carrossel
          games={RPGGames}
          title='RPG Games'
          configs={CARROSSEL_MULTI_ITEM_CONFIGS}
          carrosselType='multiItem'
          splitValue={1}
        />
      </RenderIf>

      <RenderIf condition={screenType === screens.tablet}>
        <Carrossel
          games={RPGGames}
          title='RPG Games'
          configs={CARROSSEL_MULTI_ITEM_CONFIGS}
          carrosselType='multiItem'
          splitValue={2}
        />
      </RenderIf>

      <RenderIf condition={screenType === screens.desktop}>
        <GamesSection title='RPG Games' games={RPGGames} limit={10} />
      </RenderIf>
    </div>
  );
}

export default Homepage;
