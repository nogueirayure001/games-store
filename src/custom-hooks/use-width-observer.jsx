import { useState, useEffect } from "react";

export const screenTypes = {
  phone: "phone",
  tablet: "tablet",
  desktop: "desktop",
};

export function useWidthObserver() {
  const [width, setWidth] = useState(window.innerWidth);
  const [screenType, setScreenType] = useState(screenTypes.phone);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width <= 425) {
      setScreenType(screenTypes.phone);
    } else if (width <= 1024) {
      setScreenType(screenTypes.tablet);
    } else {
      setScreenType(screenTypes.desktop);
    }
  }, [width]);

  return { width, screenType };
}
