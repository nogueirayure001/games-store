import { useEffect } from "react";
import { useCarrossel } from "./use-carrossel";

export function useCarrosselMultiFrame(frames, useKeypad) {
  const [frame0, frame1, frame2] = frames;

  const {
    previous: previous0,
    next: next0,
    handleKeyDown: handleKeyDown0,
    showSlide: showSlide0,
  } = useCarrossel(frame0);

  const {
    previous: previous1,
    next: next1,
    handleKeyDown: handleKeyDown1,
    showSlide: showSlide1,
    active,
  } = useCarrossel(frame1);

  const {
    previous: previous2,
    next: next2,
    handleKeyDown: handleKeyDown2,
    showSlide: showSlide2,
  } = useCarrossel(frame2);

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

  const showSlide = (event) => {
    showSlide0(event);
    showSlide1(event);
    showSlide2(event);
  };

  return { handlePrevious, handleNext, handleKeyDown, showSlide, active };
}
