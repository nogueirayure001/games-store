import { useEffect } from "react";
import { useCarrossel } from "./use-carrossel";

export function useCarrosselMultiFrame(frames, useKeypad) {
  const [frame0, frame1, frame2] = frames;
  const { previous0, next0, handleKeyDown0 } = useCarrossel(frame0);
  const { previous1, next1, handleKeyDown1 } = useCarrossel(frame1);
  const { previous2, next2, handleKeyDown2 } = useCarrossel(frame2);

  useEffect(() => {
    if (!useKeypad) return;

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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

  const handleKeyDown = (event) => {
    handleKeyDown0(event);
    handleKeyDown1(event);
    handleKeyDown2(event);
  };

  return { handlePrevious, handleNext, handleKeyDown };
}
