import { useCarrossel } from "./use-carrossel";

export function useCarrosselMultiFrame(frames) {
  const [frame0, frame1, frame2] = frames;
  const [previous0, next0] = useCarrossel(frame0);
  const [previous1, next1] = useCarrossel(frame1);
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

  return [handlePrevious, handleNext];
}
