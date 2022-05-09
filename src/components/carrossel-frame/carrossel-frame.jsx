import { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import { GAMES } from "../../games";
import CarrosselItem from "../carrossel-item/carrossel-item";
import {
  CarrosselFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
} from "./carrossel-frame.styles";

function CarrosselFrame({ width, maxWidth, heightRatio }) {
  const frame = useRef(null);

  const [previous, next] = useCarrossel(frame);

  return (
    <CarrosselFrameContainer width={width} maxWidth={maxWidth}>
      <Frame ref={frame}>
        {GAMES.map((game) => (
          <CarrosselItem
            key={game.slug}
            item={game}
            heightRatio={heightRatio}
          />
        ))}
      </Frame>

      <NextSlide onClick={next} />

      <PreviousSlide onClick={previous} />
    </CarrosselFrameContainer>
  );
}

export default CarrosselFrame;
