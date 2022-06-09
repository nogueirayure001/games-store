import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ColorModeContext } from "./color-mode-context";
import { colorsDarkMode, colorsLightMode, fonts } from "../styles";

export function StylesContextProvider({ children }) {
  const { usingDarkMode } = useContext(ColorModeContext);

  const theme = {
    colors: usingDarkMode ? colorsDarkMode : colorsLightMode,
    fonts: fonts,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
