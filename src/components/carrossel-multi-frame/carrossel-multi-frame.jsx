import { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import CarrosselItem from "../carrossel-item/carrossel-item";
import {
  CarrosselFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
} from "./carrossel-multi-frame.styles";

import "./carrossel-multi-frame.styles.scss";

function CarrosselMultiFrame({ games, configs }) {
  const frame0 = useRef(null);
  const [previous0, next0] = useCarrossel(frame0);

  const frame1 = useRef(null);
  const [previous1, next1] = useCarrossel(frame1);

  const frame2 = useRef(null);
  const [previous2, next2] = useCarrossel(frame2);

  const handleNext = () => {
    next0();
    next1();
    next2();
  };

  const handlePrevious = () => {
    previous0();
    previous1();
    previous2();
  };

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
      <div className='multi-frames-container'>
        <div className='frame-container'>
          <Frame ref={frame0}>{gameCardsSides}</Frame>
        </div>

        <div className='frame-container'>
          <Frame ref={frame1}>{gameCardsMain}</Frame>
        </div>

        <div className='frame-container'>
          <Frame ref={frame2}>{gameCardsSides}</Frame>
        </div>
      </div>

      <NextSlide onClick={handleNext} />

      <PreviousSlide onClick={handlePrevious} />
    </CarrosselFrameContainer>
  );
}

export default CarrosselMultiFrame;
