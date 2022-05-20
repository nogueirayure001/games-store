import { useState, useEffect } from "react";
import { useViewportObserver } from "./use-viewport-observer";

export function useCarrossel(frame, useKeypad = false) {
  const [active, setActive] = useState(0);

  const [slides, setSlides] = useState(null);
  const slidesLength = slides?.length;

  const frameElement = frame?.current;
  let frameWidth = slides && slides[active]?.getBoundingClientRect().width;

  const isElementOnViewport = useViewportObserver(frameElement);

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
    if (!useKeypad) return;

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown(event) {
    event.preventDefault();

    if (isElementOnViewport) {
      switch (event.key) {
        case "ArrowRight":
          next();
          break;

        case "ArrowLeft":
          previous();
          break;

        default:
          break;
      }
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

  function showSlide(event) {
    const targetSlide = event.target.id;

    const carrosselSlides = Array.from(slides);

    carrosselSlides.forEach((slide, index) => {
      if (slide.id === targetSlide) {
        setActive(index);
      }
    });
  }

  return { previous, next, handleKeyDown, showSlide, active };
}
