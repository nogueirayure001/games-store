import React from "react";
import { useSelector } from "react-redux";
import { selectUsingDarkMode } from "../store/color-mode/color-mode.selectors";
import { ThemeProvider } from "styled-components";
import { colorsDarkMode, colorsLightMode, fonts } from "../styles";

export function StylesContextProvider({ children }) {
  const usingDarkMode = useSelector(selectUsingDarkMode);

  const theme = {
    colors: usingDarkMode ? colorsDarkMode : colorsLightMode,
    fonts: fonts,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
