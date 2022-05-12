import { useRef } from "react";
import { useCarrosselMultiFrame } from "../../custom-hooks/use-carrossel-multiframe";
import CarrosselItem from "../carrossel-item/carrossel-item";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import {
  CarrosselMultiFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
  FrameContainer,
  MultiFramesContainer,
  FramesAndButtons,
} from "./carrossel-multi-frame.styles";

function CarrosselMultiFrame({
  games,
  configs,
  setBreadcrumbs,
  breadcrumbsConfigs,
}) {
  const [frame0, frame1, frame2] = [useRef(null), useRef(null), useRef(null)];
  const frames = [frame0, frame1, frame2];
  const { handlePrevious, handleNext, showSlide, active } =
    useCarrosselMultiFrame(frames, true);

  const gameCardsMain = games.map((game) => (
    <CarrosselItem
      key={game.slug}
      item={game}
      heightRatio={configs.heightRatio}
    />
  ));

  const gameCardsSides = games.map((game) => (
    <CarrosselItem
      key={game.slug}
      item={game}
      heightRatio={configs.heightRatio}
      showInfo={false}
    />
  ));

  return (
    <CarrosselMultiFrameContainer
      setBreadcrumbs={setBreadcrumbs}
      breadcrumbsConfigs={breadcrumbsConfigs}
    >
      <FramesAndButtons {...configs}>
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
      </FramesAndButtons>

      {setBreadcrumbs && (
        <Breadcrumbs
          games={games}
          handleClick={showSlide}
          breadcrumbsConfigs={breadcrumbsConfigs}
          active={active}
        />
      )}
    </CarrosselMultiFrameContainer>
  );
}

export default CarrosselMultiFrame;
