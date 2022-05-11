import { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import CarrosselItem from "../carrossel-item/carrossel-item";
import ItemsSplitter from "../items-splitter/items-splitter";
import {
  CarrosselFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
} from "./carrossel-frame.styles";

function CarrosselFrame({
  games,
  configs,
  frameType = "default",
  splitValue = 3,
}) {
  const frame = useRef(null);
  const [previous, next] = useCarrossel(frame);

  const { width, maxWidth } = configs;
  console.log(configs, width, maxWidth);

  const FRAME = {
    default: (
      <Frame ref={frame}>
        {games.map((game) => (
          <CarrosselItem
            key={game.slug}
            item={game}
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
    <CarrosselFrameContainer width={width} maxWidth={maxWidth}>
      {FRAME[frameType]}

      <NextSlide onClick={next} />

      <PreviousSlide onClick={previous} />
    </CarrosselFrameContainer>
  );
}

export default CarrosselFrame;
