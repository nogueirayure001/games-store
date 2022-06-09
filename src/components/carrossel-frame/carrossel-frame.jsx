import React, { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import CarrosselItem from "../carrossel-item/carrossel-item";
import ItemsSplitter from "../items-splitter/items-splitter";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import {
  CarrosselFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
  FrameAndButtons,
} from "./carrossel-frame.styles";

function CarrosselFrame({
  games,
  configs,
  frameType = "default",
  splitValue = 3,
  setBreadcrumbs = false,
  breadcrumbsConfigs,
}) {
  const frame = useRef(null);
  const { previous, next, showSlide, active } = useCarrossel(frame, true);

  const FRAME = {
    default: (
      <Frame ref={frame}>
        {games.map((game) => (
          <CarrosselItem
            key={game.id}
            id={game.id}
            game={game}
            heightRatio={configs?.heightRatio}
          />
        ))}
      </Frame>
    ),
    multiItem: (
      <Frame ref={frame}>
        <ItemsSplitter itemsToSplit={games} splitValue={splitValue} />
      </Frame>
    ),
  };

  return (
    <CarrosselFrameContainer
      setBreadcrumbs={setBreadcrumbs}
      breadcrumbsConfigs={breadcrumbsConfigs}
    >
      <FrameAndButtons {...configs}>
        {FRAME[frameType]}

        <NextSlide onClick={next} />

        <PreviousSlide onClick={previous} />
      </FrameAndButtons>

      {setBreadcrumbs && (
        <Breadcrumbs
          games={games}
          handleClick={showSlide}
          breadcrumbsConfigs={breadcrumbsConfigs}
          active={active}
        />
      )}
    </CarrosselFrameContainer>
  );
}

export default CarrosselFrame;
