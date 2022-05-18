import { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import {
  GameCarrosselContainer,
  FrameContainer,
  Frame,
  Slide,
  PreviousSlide,
  NextSlide,
} from "./game-carrossel.styles";

const maxSlides = 8;

function GameCarrossel({ game, configs }) {
  const { short_screenshots } = game;

  const frame = useRef(null);

  const { previous, next, showSlide, active } = useCarrossel(frame, true);

  return (
    <GameCarrosselContainer {...configs}>
      <FrameContainer {...configs}>
        <Frame ref={frame}>
          {short_screenshots
            .filter((_, index) => index <= maxSlides)
            .map(({ image, id }) => (
              <Slide key={id} id={id} image={image} />
            ))}
        </Frame>

        <PreviousSlide onClick={previous} />
        <NextSlide onClick={next} />
      </FrameContainer>

      <Breadcrumbs
        type='sameGame'
        screenshots={short_screenshots}
        handleClick={showSlide}
        active={active}
        breadcrumbsConfigs={{ isOnHorizontal: true }}
      />
    </GameCarrosselContainer>
  );
}

export default GameCarrossel;
