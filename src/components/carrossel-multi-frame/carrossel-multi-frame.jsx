import { useRef } from "react";
import { useCarrosselMultiFrame } from "../../custom-hooks/use-carrossel-multiframe";
import CarrosselItem from "../carrossel-item/carrossel-item";
import {
  CarrosselFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
  FrameContainer,
  MultiFramesContainer,
} from "./carrossel-multi-frame.styles";

function CarrosselMultiFrame({ games, configs }) {
  const [frame0, frame1, frame2] = [useRef(null), useRef(null), useRef(null)];
  const frames = [frame0, frame1, frame2];
  const [handlePrevious, handleNext] = useCarrosselMultiFrame(frames);

  const { width, heightRatio } = configs;

  const gameCardsMain = games.map((game) => (
    <CarrosselItem key={game.slug} item={game} heightRatio={heightRatio} />
  ));

  const gameCardsSides = games.map((game) => (
    <CarrosselItem
      key={game.slug}
      item={game}
      heightRatio={heightRatio}
      showInfo={false}
    />
  ));

  return (
    <CarrosselFrameContainer width={width}>
      <MultiFramesContainer>
        <FrameContainer>
          <Frame ref={frame0}>{gameCardsSides}</Frame>
        </FrameContainer>

        <FrameContainer>
          <Frame ref={frame1}>{gameCardsMain}</Frame>
        </FrameContainer>

        <FrameContainer>
          <Frame ref={frame2}>{gameCardsSides}</Frame>
        </FrameContainer>
      </MultiFramesContainer>

      <NextSlide onClick={handleNext} />

      <PreviousSlide onClick={handlePrevious} />
    </CarrosselFrameContainer>
  );
}

export default CarrosselMultiFrame;
