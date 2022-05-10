import { useState, useEffect } from "react";

export function useCarrossel(frame) {
  const [active, setActive] = useState(0);

  const [slides, setSlides] = useState(null);
  const slidesLength = slides?.length;

  const frameElement = frame.current;
  let frameWidth = slides && slides[active].getBoundingClientRect().width;

  useEffect(() => {
    setSlides(frameElement?.children);
  }, [frameElement, slides]);

  useEffect(() => {
    slides &&
      frameElement.scrollTo({
        left: active * frameWidth,
        behavior: "smooth",
      });
  }, [active, slides, frameElement, frameWidth]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        next();
        break;

      case "ArrowLeft":
        event.preventDefault();
        previous();
        break;

      default:
        break;
    }
  }

  function next() {
    if (active + 1 < slidesLength) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  }

  function previous() {
    if (active - 1 >= 0) {
      setActive(active - 1);
    } else {
      setActive(slidesLength - 1);
    }
  }

  return [previous, next];
}
