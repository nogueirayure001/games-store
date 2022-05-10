import { useRef } from "react";
import { useCarrossel } from "../../custom-hooks/use-carrossel";
import {
  CarrosselFrameContainer,
  NextSlide,
  PreviousSlide,
  Frame,
} from "./carrossel-frame.styles";

function CarrosselFrame({ children, width, maxWidth }) {
  const frame = useRef(null);

  const [previous, next] = useCarrossel(frame);

  return (
    <CarrosselFrameContainer width={width} maxWidth={maxWidth}>
      <Frame ref={frame}>{children}</Frame>

      <NextSlide onClick={next} />

      <PreviousSlide onClick={previous} />
    </CarrosselFrameContainer>
  );
}

export default CarrosselFrame;
