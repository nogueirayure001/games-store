import React, { createContext } from "react";
import {
  useWidthObserver,
  screenTypes,
} from "../custom-hooks/use-width-observer";

export const ScreenTypeContext = createContext({ width: "", screenType: "" });

export function ScreenTypeContextProvider({ children }) {
  const { width, screenType } = useWidthObserver();

  const value = { width: width, screenType: screenType };

  return (
    <ScreenTypeContext.Provider value={value}>
      {children}
    </ScreenTypeContext.Provider>
  );
}

export const screens = screenTypes;
