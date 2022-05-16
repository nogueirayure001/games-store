import { useState, useEffect, useCallback } from "react";

export function useViewportObserver(element) {
  const [onViewport, setOnViewport] = useState(false);

  const handleEvent = useCallback(() => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setOnViewport(rect.top >= 0 && rect.bottom <= window.innerHeight);
  }, [element]);

  useEffect(() => handleEvent(), [handleEvent]);

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    window.addEventListener("resize", handleEvent);

    return () => {
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("resize", handleEvent);
    };
  });

  return onViewport;
}
