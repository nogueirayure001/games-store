import { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import { GAMES } from "../../games";
import CarrosselItem from "../carrossel-item/carrossel-item";
import {
  CarrosselContainer,
  NextSlide,
  PreviousSlide,
  Frame,
  Title,
} from "./carrossel.styles";

function Carrossel({ width, maxWidth, heightRatio }) {
  const frame = useRef(null);

  const [previous, next] = useCarrossel(frame);

  return (
    <CarrosselContainer width={width} maxWidth={maxWidth}>
      <Title>The best action games on sale!</Title>

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
    </CarrosselContainer>
  );
}

export default Carrossel;
